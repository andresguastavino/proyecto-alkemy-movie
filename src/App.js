import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/auth/auth'
import { RequireAuth } from './components/auth/RequireAuth'
import { Login } from './components/views/Login/Login'
import { Register } from './components/views/Register/Register'
import { MovieCard } from './components/MovieCard/MovieCard'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles.css'
import Main from './components/Main'
import SearchResults from './components/SearchResults'

export const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Layout>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth>
                <MovieCard />
              </RequireAuth>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<Main/>} />
          <Route path='/search/:query' element={<SearchResults/>} />
        </Routes>
      </Layout>
      <Footer />
    </AuthProvider>
  )
}
