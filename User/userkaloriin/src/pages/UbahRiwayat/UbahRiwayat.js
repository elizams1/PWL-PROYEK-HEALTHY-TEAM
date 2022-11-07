import React from "react";
import './UbahRiwayat.css';
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs'

function UbahRiwayat(){

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
        
      </div>
     <p>ini ubah riwayat</p> 
    </div>
  )
}

export default UbahRiwayat;