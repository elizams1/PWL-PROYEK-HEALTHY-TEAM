import React, {useState, useEffect} from "react";
import './Makanan.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useDisclosure, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody 
} from '@chakra-ui/react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { BsFileEarmarkArrowDown, BsFileEarmarkPlus } from 'react-icons/bs';

function Makanan(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [KatalogData,setKatalogData] =useState([]);

  const handleDeleteRiwayat = (a) => {
    console.log("yes berhasil apus");
    onClose();
  }

  useEffect(()=> {
    axios
      .get("http://localhost:3000/data")
      .then(function (katalog){
        setKatalogData(katalog.data.katalog);
        console.log(katalog.data.katalog);
      })
      .catch(function(error){
        console.log(error);
      });
    },[]
  );

  return(
    <div className="content">
      <div className="modal-content">
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div className='the-modal'>
                <div>
                  <p className="type-modal">Apakah anda yakin menghapus data ini ?</p>
                </div>
                <div className="the-button-modal">
                  <button onClick={()=>handleDeleteRiwayat("a")} className="modal-button-yes">Iya</button>
                  <button onClick={onClose} className="modal-button-no">Tidak</button>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>

      <div className="riwayat">
        <div className="top-riwayat">
          <p className="type-name-page">Makanan</p>
          <div className="left-button">
            <Link to="/admin/makanan/tambah-makanan">
              <Button size='md' colorScheme='green' className="tambah-button">
                <p>Tambah</p>
                <BsFileEarmarkPlus/>
              </Button>
            </Link>
            <Link to="/admin/makanan/cetak-makanan">
              <Button  size='md' color='#155D27' className="cetak-button">
                <p>Cetak</p>
                <BsFileEarmarkArrowDown/>
              </Button>
            </Link>
          </div>
        </div>
        <div className="body-riwayat">
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th textAlign="center">ID</Th>
                  <Th textAlign="center">NAMA</Th>
                  <Th textAlign="center">PORSI</Th>
                  <Th textAlign="center">KALORI</Th>
                  <Th textAlign="center">UBAH/HAPUS</Th>
                </Tr>
              </Thead>
              <Tbody>
              { KatalogData!=null?
              KatalogData.map(item=> 
              <Tr>
                  <Td textAlign="center">{item.id}</Td>
                  <Td textAlign="center">{item.katalog_nama}</Td>
                  <Td textAlign="center">{item.katalog_berat}</Td>
                  <Td textAlign="center">{item.katalog_kalori}</Td>
                  <Th  className="button-action">
                    <Link to="/admin/makanan/ubah-makanan">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
              ) :
              <p>Data tidak ada</p>
              }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Makanan;