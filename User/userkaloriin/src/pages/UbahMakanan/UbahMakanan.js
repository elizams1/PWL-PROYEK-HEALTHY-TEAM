<<<<<<< HEAD
import React,{ useState } from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function UbahMakanan(){
  const [nama,setNama] =useState('');
  const [berat,setBerat] = useState('');
  const [kalori,setKalori] = useState('');
  const [gambar,setGambar] = useState(null);

  const navigate = useNavigate();

  const handleTambah = () =>{
    const value = {
      'nama' : nama,
      'berat' : berat,
      'kalori' : kalori,
      'gambar' : gambar, 
    }
    console.log(value);
    navigate('/admin/makanan');
  }

  return (
    <div className="content">
      <div className="ubah-riwayat">
        <div className="top-breadcumb">
          <div>
            <Link to="/admin/makanan"> 
            <p className="type-name-page">Makanan</p>
          </Link>
          </div>
          <div>
            <BsSlashLg/>
          </div>
          <div>
            <p className="type-name-page">Ubah Makanan</p>
          </div>
        </div>
        <div className="main-content">
          <div className="the-form">
            <label className="the-label-riwayat">
              Nama Makanan 
            </label>
            <input className="the-input-riwayat" type="text" name="nama"  placeholder="Masukkan Nama makanan" value={nama} onChange={e=>setNama(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Porsi Makanan 
            </label>
            <input className="the-input-riwayat" type="text" name="berat"  placeholder="Masukkan Porsi Makanan" value={berat} onChange={e=>setBerat(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kalori Makanan
            </label>
            <input className="the-input-riwayat" type="text" name="kalori"  placeholder="Masukkan Kalori Makanan" value={kalori} onChange={e=>setKalori(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Gambar Makanan
            </label>
            <input className="the-input-riwayat" type="file" name="gambar"  placeholder="Masukkan Kalori Makanan" value={gambar} onChange={e=>setGambar(e.target.value)} />
          </div>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleTambah}>Simpan</button>
        </div>  
      </div>
    </div>
  )
}

=======
import React,{ useState } from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function UbahMakanan(){
  const [nama,setNama] =useState('');
  const [berat,setBerat] = useState('');
  const [kalori,setKalori] = useState('');
  const [gambar,setGambar] = useState(null);

  const navigate = useNavigate();

  const handleTambah = () =>{
    const value = {
      'nama' : nama,
      'berat' : berat,
      'kalori' : kalori,
      'gambar' : gambar, 
    }
    console.log(value);
    navigate('/admin/makanan');
  }

  return (
    <div className="content">
      <div className="ubah-riwayat">
        <div className="top-breadcumb">
          <div>
            <Link to="/admin/makanan"> 
            <p className="type-name-page">Makanan</p>
          </Link>
          </div>
          <div>
            <BsSlashLg/>
          </div>
          <div>
            <p className="type-name-page">Ubah Makanan</p>
          </div>
        </div>
        <div className="main-content">
          <div className="the-form">
            <label className="the-label-riwayat">
              Nama Makanan 
            </label>
            <input className="the-input-riwayat" type="text" name="nama"  placeholder="Masukkan Nama makanan" value={nama} onChange={e=>setNama(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Porsi Makanan 
            </label>
            <input className="the-input-riwayat" type="text" name="berat"  placeholder="Masukkan Porsi Makanan" value={berat} onChange={e=>setBerat(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kalori Makanan
            </label>
            <input className="the-input-riwayat" type="text" name="kalori"  placeholder="Masukkan Kalori Makanan" value={kalori} onChange={e=>setKalori(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Gambar Makanan
            </label>
            <input className="the-input-riwayat" type="file" name="gambar"  placeholder="Masukkan Kalori Makanan" value={gambar} onChange={e=>setGambar(e.target.value)} />
          </div>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleTambah}>Simpan</button>
        </div>  
      </div>
    </div>
  )
}

>>>>>>> a14033f5d99fb3bbefa57fc135b1e1d182b5ca35
export default UbahMakanan;