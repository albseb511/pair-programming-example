import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <div>
        <Route exact path="/">Home Page</Route>
        <Route path="/about-us">About Page</Route>
        <Route path="/contact">Contact Page</Route>
        <Route path="/services">Services Page</Route>
        <Route path="/login">Login Page</Route>
      </div>
   </BrowserRouter>
  )
}

export default App