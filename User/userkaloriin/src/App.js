import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route} from "react-router-dom";
import { AuthProvider } from "./components/auth.js";
import UserLayout from './components/userLayout.js';
// import Header from './components/Header/Header.js';
// import Footer from './components/Footer/Footer.js';
import Login from './pages/Login/Login.js';
import Beranda from './pages/Beranda/Beranda.js';
import Riwayat from './pages/Riwayat/Riwayat.js';
import Postingan from './pages/Postingan/Postingan.js';
import Profil from './pages/Profil/Profil.js';
import TambahPostingan from './pages/TambahPostingan/TambahPostingan.js';


function App() {
  
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/user" element={<UserLayout/>}>
            <Route path="beranda" element={<Beranda/>}></Route>
            <Route path="riwayat" element={<Riwayat/>}></Route>
            <Route path="postingan" element={<Postingan/>}></Route>
            <Route path="profil" element={<Profil/>}></Route>
            <Route path="tambah-postingan" element={<TambahPostingan/>}></Route>
          </Route>
          <Route path="/admin">
             <Route path="beranda" element={<Beranda/>}></Route>
          </Route>
        </Routes>
        
      </AuthProvider>    
    </ChakraProvider>
  );
}

export default App;
