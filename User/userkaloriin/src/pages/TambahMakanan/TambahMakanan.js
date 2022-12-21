import React,{ useState } from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function TambahMakanan(){
  const [nama,setNama] =useState('');
  const [berat,setBerat] = useState('');
  const [kalori,setKalori] = useState('');
  const [gambar,setGambar] = useState(null);

  const navigate = useNavigate();

  const handleTambah = () =>{
        
    const formData = new FormData()
    formData.append("nama", nama)
    formData.append("berat", berat)
    formData.append("kalori", kalori)
    formData.append("image", gambar, gambar.name)

    axios
      .post('http://localhost:3306/dataKatalog', formData)
      .then((res => {
      console.log('Axios response: ', res)
    }))
      .catch(err => {
        console.error(err);
      });
      
    console.log(formData);
    navigate('/admin/makanan');
  }

  return (
    <div className="content">
      <div className="tambah-riwayat">
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
            <p className="type-name-page">Tambah Makanan</p>
          </div>
        </div>
        <div className="main-content">
          <div className="the-form">
            <label className="the-label-riwayat">
              Nama Makanan 
            </label>
            <input className="the-input-riwayat" type="text" name="nama"  placeholder="Masukkan Nama makanan" onChange={e=>setNama(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Porsi Makanan 
            </label>
            <input className="the-input-riwayat" type="text" name="berat"  placeholder="Masukkan Porsi Makanan" onChange={e=>setBerat(e.target.value)}/>
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Kalori Makanan
            </label>
            <input className="the-input-riwayat" type="text" name="kalori"  placeholder="Masukkan Kalori Makanan" onChange={e=>setKalori(e.target.value)} />
          </div>
          <div className="the-form">
            <label className="the-label-riwayat">
              Gambar Makanan
            </label>
            <input className="the-input-riwayat" type="file" accept="image/*" name="gambar"  placeholder="Masukkan Kalori Makanan" onChange={e=>setGambar(e.target.files[0])} />
          </div>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleTambah}>Tambah</button>
        </div>
      </div>
    </div>
  )
}

export default TambahMakanan;