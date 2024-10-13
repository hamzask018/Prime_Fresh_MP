
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'
import Signup from "./pages/Signup"
import Login from './pages/Login'
import Profile from './pages/Profile'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }></Route>
      <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
      <Route path='/*' element={<Error/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
