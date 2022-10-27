import React from "react";
import './TambahPostingan.css';
import {
  Button,
  Textarea
} from '@chakra-ui/react';
import { BsFillCameraFill } from 'react-icons/bs';

function TambahPostingan(){

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
      </div>
    </div>
  );
}

export default TambahPostingan;