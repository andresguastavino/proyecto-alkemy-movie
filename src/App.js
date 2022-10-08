import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/auth/auth'
import { RequireAuth } from './components/auth/RequireAuth'
import { Notes } from './components/Notes'
import { Login } from './components/views/Login/Login'
import { Register } from './components/views/Register/Register'

import './App.css'

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}
