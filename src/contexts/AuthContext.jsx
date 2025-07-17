import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, getUserById, createUser } from '../lib/supabase'
import toast from 'react-hot-toast'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
          return
        }

        if (session?.user) {
          setUser(session.user)
          await loadUserProfile(session.user.id)
        }
      } catch (error) {
        console.error('Error in getInitialSession:', error)
      } finally {
        setLoading(false)
        setInitializing(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id)
        
        setUser(session?.user ?? null)
        
        if (session?.user) {
          await loadUserProfile(session.user.id)
        } else {
          setUserProfile(null)
        }
        
        setLoading(false)
        setInitializing(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const loadUserProfile = async (userId) => {
    try {
      const profile = await getUserById(userId)
      setUserProfile(profile)
    } catch (error) {
      console.error('Error loading user profile:', error)
      // If profile doesn't exist, it might be a new user
      setUserProfile(null)
    }
  }

  const signUp = async (email, password, userData) => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: userData.name
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // Create user profile in our users table
        const profileData = {
          id: data.user.id,
          email: data.user.email,
          ...userData,
          created_at: new Date(),
          updated_at: new Date()
        }
        
        try {
          const profile = await createUser(profileData)
          setUserProfile(profile)
          toast.success('Account created successfully!')
        } catch (profileError) {
          console.error('Error creating user profile:', profileError)
          toast.error('Account created but profile setup failed. Please try logging in.')
        }
        
        return data
      }
    } catch (error) {
      console.error('Signup error:', error)
      let errorMessage = 'Failed to create account'
      
      if (error.message.includes('already registered')) {
        errorMessage = 'This email is already registered. Please try logging in.'
      } else if (error.message.includes('Password')) {
        errorMessage = 'Password is too weak. Please use at least 6 characters.'
      } else if (error.message.includes('Invalid email')) {
        errorMessage = 'Please enter a valid email address.'
      }
      
      toast.error(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email, password) => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      
      toast.success('Welcome back!')
      return data
    } catch (error) {
      console.error('Login error:', error)
      let errorMessage = 'Failed to sign in'
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Invalid email or password. Please try again.'
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Please check your email and confirm your account.'
      }
      
      toast.error(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      })

      if (error) throw error
      return data
    } catch (error) {
      console.error('Google sign in error:', error)
      toast.error('Failed to sign in with Google')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      setUser(null)
      setUserProfile(null)
      toast.success('Signed out successfully')
    } catch (error) {
      console.error('Sign out error:', error)
      toast.error('Failed to sign out')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (updates) => {
    try {
      if (!user) throw new Error('No user logged in')
      
      const { updateUser } = await import('../lib/supabase')
      const updatedProfile = await updateUser(user.id, updates)
      setUserProfile(updatedProfile)
      toast.success('Profile updated successfully!')
      return updatedProfile
    } catch (error) {
      console.error('Profile update error:', error)
      toast.error('Failed to update profile')
      throw error
    }
  }

  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })
      
      if (error) throw error
      toast.success('Password reset email sent!')
    } catch (error) {
      console.error('Password reset error:', error)
      toast.error('Failed to send password reset email')
      throw error
    }
  }

  const value = {
    user,
    userProfile,
    loading: loading || initializing,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    updateProfile,
    resetPassword,
    refreshProfile: () => loadUserProfile(user?.id)
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}