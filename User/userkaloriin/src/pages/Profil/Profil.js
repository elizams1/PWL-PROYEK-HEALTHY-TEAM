import React from "react";
import './Profil.css';

function Profil(){

  return(
    <div className="content">
      <div className="profil">
        <p className="type-name-page">Profil</p>
        <div className="photo-profil">
          <img className="photo-profil-user" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
          <p className="type-profil-name">Nama Pengguna</p>
        </div>
        <div className="detail-profil">
          <div className="email-user">
            <p className="type-detail">Email</p>
            <p className="isi-detail">healthy_people@gmail.com</p>
          </div>
          <div className="password-user">
            <p className="type-detail">Password</p>
            <p className="isi-detail">*******</p>
          </div>
        </div>
        <div className="logout">
          <p className="type-logout">Keluar</p>
        </div>
      </div>
    </div>
  );
}

export default Profil;