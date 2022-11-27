import React,{ useState } from "react";
import './UbahRiwayat.css';
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function UbahRiwayat(){
  const [date,setDate] =useState('');
  const [bb,setBb] = useState('');
  const [makanPagi,setMakanPagi] = useState('');
  const [minumPagi,setMinumPagi] = useState('');
  const [kaloriPagi,setKaloriPagi] = useState('');
  const [makanSiang,setMakanSiang] = useState('');
  const [minumSiang,setMinumSiang] = useState('');
  const [kaloriSiang,setKaloriSiang] = useState('');
  const [makanMalam,setMakanMalam] = useState('');
  const [minumMalam,setMinumMalam]= useState('');
  const [kaloriMalam,setKaloriMalam]= useState('');
  var c = Number(kaloriPagi);
  var b = Number(kaloriSiang);
  var e = Number(kaloriMalam);
  var total = c+b+e;

  const navigate = useNavigate();

  const handleTambah = () =>{
    const value = {
      'date' : date,
      'bb' : bb,
      'makanPagi' : makanPagi,
      'minumPagi' : minumPagi,
      'kaloriPagi' : kaloriPagi,
      'makanSiang' : makanSiang,
      'minumSiang' : minumSiang,
      'kaloriSiang' : kaloriSiang,
      'makanMalam' : makanMalam,
      'minumMalam' : minumMalam,
      'kaloriMalam' : kaloriMalam,
      'total' : total 
    }
    console.log(value);
    navigate('/user/riwayat');
  }

  return (
    <div className="content">
      <div className="ubah-riwayat">
        <div className="top-breadcumb">
          <div>
            <Link to="/user/riwayat"> 
            <p className="type-name-page">Riwayat</p>
          </Link>
          </div>
          <div>
            <BsSlashLg/>
          </div>
          <div>
            <p className="type-name-page">Ubah Riwayat</p>
          </div>
        </div>
        <div className="main-content">
          <div className="the-form">
            <label className="the-label-riwayat">
              Tanggal 
            </label>
            <input className="the-input-riwayat" type="date" name="tanggal"  placeholder="Pilih tanggal" value={date} onChange={e=>setDate(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Berat Badan 
            </label>
            <input className="the-input-riwayat" type="number" name="beratBadan"  placeholder="Masukkan Berat Badan" value={bb} onChange={e=>setBb(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Makanan Pagi 
            </label>
            <input className="the-input-riwayat" type="text" name="makanPagi"  placeholder="Masukkan Nama Makanan Pagi" value={makanPagi} onChange={e=>setMakanPagi(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Minuman Pagi 
            </label>
            <input className="the-input-riwayat" type="text" name="minumPagi" placeholder="Masukkan Nama Minuman Pagi" value={minumPagi} onChange={e=>setMinumPagi(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kalori Makanan dan Minuman Pagi 
            </label>
            <input className="the-input-riwayat" type="text" name="kaloriPagi" placeholder="Masukkan Jumlah Kalori Makanan dan Minuman Pagi Hari" value={kaloriPagi} onChange={e=>setKaloriPagi(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Makanan Siang 
            </label>
            <input className="the-input-riwayat" type="text" name="makanSiang" placeholder="Masukkan Nama Makanan Siang" value={makanSiang} onChange={e=>setMakanSiang(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Minuman Siang
            </label>
            <input className="the-input-riwayat" type="text" name="minumSiang" placeholder="Masukkan Nama Minuman Siang" value={minumSiang} onChange={e=>setMinumSiang(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kalori Makanan dan Minuman Siang 
            </label>
            <input className="the-input-riwayat" type="text" name="kaloriSiang" placeholder="Masukkan Jumlah Kalori Makanan dan Minuman Siang" value={kaloriSiang} onChange={e=>setKaloriSiang(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Makanan Malam
            </label>
            <input className="the-input-riwayat" type="text" name="makanMalam" placeholder="Masukkan Nama Makanan Malam" value={makanMalam} onChange={e=>setMakanMalam(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Minuman Malam
            </label>
            <input className="the-input-riwayat" type="text" name="minumMalam" placeholder="Masukkan Nama Minuman Malam" value={minumMalam} onChange={e=>setMinumMalam(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kalori Makanan dan Minuman Malam
            </label>
            <input className="the-input-riwayat" type="text" name="kaloriMalam" placeholder="Masukkan Jumlah Kalori Makanan dan Minuman Malam" value={kaloriMalam} onChange={e=>setKaloriMalam(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Total Kalori Hari Ini
            </label>
            <p className="the-input-riwayat">{total}</p>
          </div>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleTambah}>Simpan</button>
        </div>  
      </div>
     
    </div>
  )
}

export default UbahRiwayat;