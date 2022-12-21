import React from "react";
import './Postingan.css';
import { useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalBody } from '@chakra-ui/react';

function Postingan(){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeletePostingan = (a) => {
    console.log("yes berhasil apus");
    onClose();
  }
  return(
    <div className="content">
      <div className="modal-content">
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div className='the-modal'>
                <div>
                  <p className="type-modal">Apakah anda yakin menghapus postingan ini ?</p>
                </div>
                <div className="the-button-modal">
                  <button onClick={()=>handleDeletePostingan("a")} className="modal-button-yes">Iya</button>
                  <button onClick={onClose} className="modal-button-no">Tidak</button>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>

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
              <div className="trash-post" onClick={onOpen}>
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