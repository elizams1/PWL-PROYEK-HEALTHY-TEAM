import React,{ useState } from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function TambahPengguna(){
  const [nama,setNama] =useState('');
  const [email,setEmail] = useState('');
  const [kontak,setKontak] = useState('');
  const [role,setRole] = useState('');
  const [gambar,setGambar] = useState(null);

  const navigate = useNavigate();

  const handleTambah = () =>{
    const value = {
      'nama' : nama,
      'email' : email,
      'kontak' : kontak,
      'role': role,
      'gambar' : gambar
    }
    console.log(value);
    navigate('/admin/pengguna');
  }

  return (
    <div className="content">
      <div className="tambah-riwayat">
        <div className="top-breadcumb">
          <div>
            <Link to="/admin/pengguna"> 
            <p className="type-name-page">Pengguna</p>
          </Link>
          </div>
          <div>
            <BsSlashLg/>
          </div>
          <div>
            <p className="type-name-page">Tambah Pengguna</p>
          </div>
        </div>
        <div className="main-content">
          <div className="the-form">
            <label className="the-label-riwayat">
              Nama Pengguna 
            </label>
            <input className="the-input-riwayat" type="text" name="nama"  placeholder="Masukkan Nama Pengguna" value={nama} onChange={e=>setNama(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Email
            </label>
            <input className="the-input-riwayat" type="text" name="email"  placeholder="Masukkan Email Pengguna" value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kontak Pengguna
            </label>
            <input className="the-input-riwayat" type="number" name="kontak"  placeholder="Masukkan Kalori Makanan" value={kontak} onChange={e=>setKontak(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Role Pengguna
            </label>
            <select className="the-input-riwayat" onChange={e=>setRole(e.target.value)}>
              <option selected value="">Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Gambar Makanan
            </label>
            <input className="the-input-riwayat" type="file" name="gambar"  placeholder="Masukkan Kalori Makanan" value={gambar} onChange={e=>setGambar(e.target.value)} />
          </div>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleTambah}>Tambah</button>
        </div>
      </div>
    </div>
  )
}

export default TambahPengguna;