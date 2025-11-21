import { useState } from 'react'
import Signup from "./Pages/Signup"
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  

  return (
   
      <Router>

          <Routes>

              <Route path="/" element={<Home/>}> </Route>

              <Route path="/login" element={<Login/>}></Route> 
              <Route path="/signup" element={<Signup/>}></Route>

          </Routes>

      </Router>

     
  )
}

export default App
