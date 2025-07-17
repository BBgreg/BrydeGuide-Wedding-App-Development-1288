import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { getUserDecisions, subscribeToUserData, unsubscribeFromUserData } from '../lib/supabase'

const AppContext = createContext({})

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

const initialState = {
  currentCategory: 'venue',
  decisions: [],
  currentSession: null,
  timerActive: false,
  timerExpires: null,
  categories: [
    { id: 'venue', name: 'Venue', icon: '🏛️', completed: false },
    { id: 'photography', name: 'Photography', icon: '📸', completed: false },
    { id: 'catering', name: 'Catering', icon: '🍽️', completed: false },
    { id: 'florist', name: 'Florist', icon: '🌸', completed: false },
    { id: 'music', name: 'Music', icon: '🎵', completed: false },
    { id: 'cake', name: 'Cake', icon: '🎂', completed: false },
    { id: 'transportation', name: 'Transportation', icon: '🚗', completed: false },
    { id: 'officiant', name: 'Officiant', icon: '👨‍💼', completed: false },
  ],
  confidenceScores: {},
  stressLevel: 5,
  overallProgress: 0,
  realtimeChannel: null
}

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      return { ...state, currentCategory: action.payload }
    
    case 'SET_DECISIONS':
      const updatedCategories = state.categories.map(cat => {
        const hasDecision = action.payload.some(decision => 
          decision.category === cat.id && decision.selected_vendor
        )
        return { ...cat, completed: hasDecision }
      })
      
      return { 
        ...state, 
        decisions: action.payload,
        categories: updatedCategories
      }
    
    case 'ADD_DECISION':
      const newDecisions = [...state.decisions, action.payload]
      const categoriesWithNewDecision = state.categories.map(cat => 
        cat.id === action.payload.category 
          ? { ...cat, completed: true }
          : cat
      )
      
      return { 
        ...state, 
        decisions: newDecisions,
        categories: categoriesWithNewDecision
      }
    
    case 'SET_CURRENT_SESSION':
      return { ...state, currentSession: action.payload }
    
    case 'START_TIMER':
      return { 
        ...state, 
        timerActive: true, 
        timerExpires: action.payload 
      }
    
    case 'STOP_TIMER':
      return { 
        ...state, 
        timerActive: false, 
        timerExpires: null 
      }
    
    case 'UPDATE_CONFIDENCE':
      return {
        ...state,
        confidenceScores: {
          ...state.confidenceScores,
          [action.payload.category]: action.payload.score
        }
      }
    
    case 'UPDATE_STRESS_LEVEL':
      return { ...state, stressLevel: action.payload }
    
    case 'UPDATE_PROGRESS':
      const completedCount = state.categories.filter(cat => cat.completed).length
      return { 
        ...state, 
        overallProgress: (completedCount / state.categories.length) * 100 
      }
    
    case 'SET_REALTIME_CHANNEL':
      return { ...state, realtimeChannel: action.payload }
    
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      loadUserDecisions()
      setupRealtimeSubscription()
    } else {
      // Clean up realtime subscription when user logs out
      if (state.realtimeChannel) {
        unsubscribeFromUserData(state.realtimeChannel)
        dispatch({ type: 'SET_REALTIME_CHANNEL', payload: null })
      }
    }

    return () => {
      if (state.realtimeChannel) {
        unsubscribeFromUserData(state.realtimeChannel)
      }
    }
  }, [user])

  useEffect(() => {
    dispatch({ type: 'UPDATE_PROGRESS' })
  }, [state.categories])

  const loadUserDecisions = async () => {
    try {
      const decisions = await getUserDecisions(user.id)
      dispatch({ type: 'SET_DECISIONS', payload: decisions })
      
      // Update confidence scores
      decisions.forEach(decision => {
        if (decision.confidence_score) {
          dispatch({
            type: 'UPDATE_CONFIDENCE',
            payload: {
              category: decision.category,
              score: decision.confidence_score
            }
          })
        }
      })
    } catch (error) {
      console.error('Error loading decisions:', error)
    }
  }

  const setupRealtimeSubscription = () => {
    const channel = subscribeToUserData(user.id, (payload) => {
      console.log('Realtime update:', payload)
      
      // Refresh data when changes occur
      if (payload.table === 'user_decisions') {
        loadUserDecisions()
      }
    })
    
    dispatch({ type: 'SET_REALTIME_CHANNEL', payload: channel })
  }

  const setCurrentCategory = (category) => {
    dispatch({ type: 'SET_CURRENT_CATEGORY', payload: category })
  }

  const addDecision = (decision) => {
    dispatch({ type: 'ADD_DECISION', payload: decision })
  }

  const setCurrentSession = (session) => {
    dispatch({ type: 'SET_CURRENT_SESSION', payload: session })
  }

  const startTimer = (expiryTime) => {
    dispatch({ type: 'START_TIMER', payload: expiryTime })
  }

  const stopTimer = () => {
    dispatch({ type: 'STOP_TIMER' })
  }

  const updateConfidence = (category, score) => {
    dispatch({ 
      type: 'UPDATE_CONFIDENCE', 
      payload: { category, score } 
    })
  }

  const updateStressLevel = (level) => {
    dispatch({ type: 'UPDATE_STRESS_LEVEL', payload: level })
  }

  const getNextCategory = () => {
    const currentIndex = state.categories.findIndex(cat => cat.id === state.currentCategory)
    const nextIncompleteCategory = state.categories
      .slice(currentIndex + 1)
      .find(cat => !cat.completed)
    
    return nextIncompleteCategory?.id || null
  }

  const getCategoryProgress = (categoryId) => {
    const decision = state.decisions.find(d => d.category === categoryId)
    return decision ? 'completed' : 'pending'
  }

  const value = {
    ...state,
    setCurrentCategory,
    addDecision,
    setCurrentSession,
    startTimer,
    stopTimer,
    updateConfidence,
    updateStressLevel,
    getNextCategory,
    getCategoryProgress,
    refreshDecisions: loadUserDecisions
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}