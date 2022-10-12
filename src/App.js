import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { auth } from "./firebase";

const App = () => {

  useEffect(()=>{
    console.info(auth)
  },[])
  
  return(
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App