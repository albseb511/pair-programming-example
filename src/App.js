import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
   </BrowserRouter>
  )
}

export default App