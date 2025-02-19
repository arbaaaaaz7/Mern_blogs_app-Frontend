import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MyBlogs from './pages/MyBlogs'
import CreatePost from './pages/CreatePost'
import PostDetails from './pages/PostDetails'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={ <Home/> } />
      <Route exact path='/login' element={ <Login/> } />
      <Route exact path='/register' element={ <Register/> } />
      <Route exact path='/write' element={ <CreatePost/> } />
      <Route exact path='/Post/post/:id' element={ <PostDetails/> } />   
      <Route exact path='/edit/:id' element={ <EditPost/> } />
      <Route exact path='/myblogs/:id' element={ <MyBlogs/> } />
      <Route exact path='/profile/:id' element={ <Profile/> } />

      
    </Routes>
    </>
  )
}

export default App
