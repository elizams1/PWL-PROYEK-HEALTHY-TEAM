import React from "react";
import { Link } from "react-router-dom";
import {BsSlashLg} from 'react-icons/bs';

function CetakMakanan(){

  return (
    <div className="content">
      <div className="cetak-riwayat">
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
            <p className="type-name-page">Cetak Makanan</p>
          </div>
        </div>
        <div className="main-content">
           <div className="the-file-document">
              <iframe src={require("../../assets/contoh.pdf")} 
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

export default CetakMakanan;