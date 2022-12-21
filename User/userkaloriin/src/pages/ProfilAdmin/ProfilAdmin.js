import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/auth.js";
import './ProfilAdmin.css';

function ProfilAdmin(){
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  }
  return(
    <div className="content">
      <div className="profil">
        <p className="type-name-page">Profil</p>
        <div className="photo-profil">
          <img className="photo-profil-user" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
          <p className="type-profil-name">Nama Admin</p>
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
          <button className="type-logout" onClick={handleLogout}>Keluar</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilAdmin;