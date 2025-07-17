import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { AppProvider } from './contexts/AppContext'
import ProtectedRoute from './components/common/ProtectedRoute'
import Dashboard from './components/dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
            
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  iconTheme: {
                    primary: '#9CAF88',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </div>
        </Router>
      </AppProvider>
    </AuthProvider>
  )
}

export default App