<<<<<<< HEAD
import React from "react";
import './TambahPostingan.css';
import {
  Button,
  Textarea
} from '@chakra-ui/react';
import { BsFillCameraFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function TambahPostingan(){
  const navigate = useNavigate();

  const handleAddPostingan = () => {
    navigate('/user/postingan');
  }

  return(
    <div className="content">
      <div className="tambah-postingan">
        <p className="type-name-page">Tambah Postingan</p>
        <div className="upload-postingan">
          <p className="type-detail">Upload Foto</p>
          <Button size='xs' className="tambah-button">
            <p>Pilih Foto</p>
           <BsFillCameraFill/></Button>
        </div>
        <div className="caption-postingan">
          <p className="type-detail">Caption Foto</p>
          <Textarea placeholder='Tulis caption foto'/>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleAddPostingan}>Tambah</button>
        </div>
      </div>
    </div>
  );
}

=======
import React from "react";
import './TambahPostingan.css';
import {
  Button,
  Textarea
} from '@chakra-ui/react';
import { BsFillCameraFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function TambahPostingan(){
  const navigate = useNavigate();

  const handleAddPostingan = () => {
    navigate('/user/postingan');
  }

  return(
    <div className="content">
      <div className="tambah-postingan">
        <p className="type-name-page">Tambah Postingan</p>
        <div className="upload-postingan">
          <p className="type-detail">Upload Foto</p>
          <Button size='xs' className="tambah-button">
            <p>Pilih Foto</p>
           <BsFillCameraFill/></Button>
        </div>
        <div className="caption-postingan">
          <p className="type-detail">Caption Foto</p>
          <Textarea placeholder='Tulis caption foto'/>
        </div>
        <div className="button-add-postingan">
          <button className="type-add-postingan" onClick={handleAddPostingan}>Tambah</button>
        </div>
      </div>
    </div>
  );
}

>>>>>>> a14033f5d99fb3bbefa57fc135b1e1d182b5ca35
export default TambahPostingan;