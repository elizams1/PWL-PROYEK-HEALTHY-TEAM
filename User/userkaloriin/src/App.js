import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route} from "react-router-dom";
import { AuthProvider } from "./components/auth.js";
import UserLayout from './components/userLayout.js';
import AdminLayout from './components/adminLayout.js';
// import Header from './components/Header/Header.js';
// import Footer from './components/Footer/Footer.js';
import Login from './pages/Login/Login.js';
import Beranda from './pages/Beranda/Beranda.js';
import Riwayat from './pages/Riwayat/Riwayat.js';
import Postingan from './pages/Postingan/Postingan.js';
import Profil from './pages/Profil/Profil.js';
import TambahPostingan from './pages/TambahPostingan/TambahPostingan.js';

import TambahRiwayat from './pages/TambahRiwayat/TambahRiwayat.js';
import UbahRiwayat from './pages/UbahRiwayat/UbahRiwayat.js';
import CetakRiwayat from './pages/CetakRiwayat/CetakRiwayat.js';

//ADMIN 
import Makanan from './pages/Makanan/Makanan.js';
import ProfilAdmin from './pages/ProfilAdmin/ProfilAdmin.js';
import Pengguna from './pages/Pengguna/Pengguna.js';
import TambahMakanan from './pages/TambahMakanan/TambahMakanan.js';
import UbahMakanan from './pages/UbahMakanan/UbahMakanan.js';
import CetakMakanan from './pages/CetakMakanan/CetakMakanan.js';
import TambahPengguna from './pages/TambahPengguna/TambahPengguna.js';
import UbahPengguna from './pages/UbahPengguna/UbahPengguna.js';
import CetakPengguna from './pages/CetakPengguna/CetakPengguna.js';

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
            <Route path="riwayat/tambah-riwayat" element={<TambahRiwayat/>}></Route>
            <Route path="riwayat/ubah-riwayat" element={<UbahRiwayat/>}></Route>
            <Route path="riwayat/cetak-riwayat" element={<CetakRiwayat/>}></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="beranda" element={<Beranda/>}></Route>
            <Route path="makanan" element={<Makanan/>}></Route>
            <Route path="profil" element={<ProfilAdmin/>}></Route>
            <Route path="pengguna" element={<Pengguna/>}></Route>
            <Route path="makanan/tambah-makanan" element={<TambahMakanan/>}></Route>
            <Route path="makanan/ubah-makanan" element={<UbahMakanan/>}></Route>
            <Route path="makanan/cetak-makanan" element={<CetakMakanan/>}></Route>
            <Route path="pengguna/tambah-pengguna" element={<TambahPengguna/>}></Route>
            <Route path="pengguna/ubah-pengguna" element={<UbahPengguna/>}></Route>
            <Route path="pengguna/cetak-pengguna" element={<CetakPengguna/>}></Route>
          </Route>
        </Routes>
      </AuthProvider>    
    </ChakraProvider>
  );
}

export default App;
