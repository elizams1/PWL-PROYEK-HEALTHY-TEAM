import React from "react";
import './TambahRiwayat.css';
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs'

function TambahRiwayat(){

  return (
    <div className="content">
      <div className="tambah-riwayat">
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
            <p className="type-name-page">Tambah Riwayat</p>
          </div>
        </div>
        
      </div>
     <p>ini tambah riwayat</p> 
    </div>
  )
}

export default TambahRiwayat;