import React from 'react'
import { useAuth } from './auth/auth'

export const Notes = () => {
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
  }
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
