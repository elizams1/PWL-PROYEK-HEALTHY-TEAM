<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';

function CetakPengguna(){

  return (
    <div className="content">
      <div className="cetak-riwayat">
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
            <p className="type-name-page">Cetak Data Pengguna</p>
          </div>
        </div>
        <div className="main-content">
           <div className="the-file-document">
              <iframe src={require("../../assets/contoh1.pdf")} 
            height="100%" 
            width="100%" 
            frameBorder="0" 
            scrolling="auto"
            title="theDocument"
            />
            </div>
        </div>
      </div>
    </div>
  )
}

=======
import React from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';

function CetakPengguna(){

  return (
    <div className="content">
      <div className="cetak-riwayat">
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
            <p className="type-name-page">Cetak Data Pengguna</p>
          </div>
        </div>
        <div className="main-content">
           <div className="the-file-document">
              <iframe src={require("../../assets/contoh1.pdf")} 
            height="100%" 
            width="100%" 
            frameBorder="0" 
            scrolling="auto"
            title="theDocument"
            />
            </div>
        </div>
      </div>
    </div>
  )
}

>>>>>>> a14033f5d99fb3bbefa57fc135b1e1d182b5ca35
export default CetakPengguna;