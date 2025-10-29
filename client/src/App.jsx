import React from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import SignUp from './components/signUp/SignUp'
import SignIn from './components/signUp/SignIn'
import Todo from './components/todo/Todo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from './store'

function App() {
  const dispatch = useDispatch()
useEffect(() => {
  
  const id=sessionStorage.getItem("id")
  if(id){
    dispatch(authActions.login())
  }

 
}, [])

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes> 
      <Footer/>
    </Router>
     
     
    

    </>
  )
}

export default App
