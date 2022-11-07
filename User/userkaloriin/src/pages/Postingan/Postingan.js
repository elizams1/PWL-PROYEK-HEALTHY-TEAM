import React from "react";
import './Postingan.css';

function Postingan(){

  return(
    <div className="content">
      <div className="postingan">
        <p className="type-name-page">Postingan</p>
        <div className="the-postingan">
          <div className="the-post">
            <div className="name-post">
              <img className="profil-post" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
              <p className="the-uname">Nama Pengguna</p>
            </div>
            <div className="img-post">
              <img className="" src={require("../../assets/BackgroundLampung.jpg")} alt="the-photos"></img>
            </div>
            <div className="detail-post">
              <div className="capt-post">
                <p className="the-uname2">Nama Pengguna</p>
                <p className="the-capt">caption postingan</p>
              </div>
              <div className="trash-post" onClick={()=>alert("ola")}>
                <img className="the-trash-post" src={require("../../assets/trashButton.png")} alt="the-photos"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postingan;