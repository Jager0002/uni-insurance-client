import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from './firebase.init'

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  if (loading) return
  if (!user) {
    return <Navigate to='/account' state={{ from: location }} replace></Navigate>
  }
  return children
}

export default ProtectedRoute