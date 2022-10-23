import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.js';
import Beranda from './pages/Beranda/Beranda.js';
import Riwayat from './pages/Riwayat/Riwayat.js';
import Postingan from './pages/Postingan/Postingan.js';
import Profil from './pages/Profil/Profil.js';
import TambahPostingan from './pages/TambahPostingan/TambahPostingan.js';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Beranda/>}></Route>
        <Route path="/beranda" element={<Beranda/>}></Route>
        <Route path="/riwayat" element={<Riwayat/>}></Route>
        <Route path="/postingan" element={<Postingan/>}></Route>
        <Route path="/profil" element={<Profil/>}></Route>
        <Route path="/tambah-postingan" element={<TambahPostingan/>}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
