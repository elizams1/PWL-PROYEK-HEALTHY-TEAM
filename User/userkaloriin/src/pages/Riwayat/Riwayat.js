<<<<<<< HEAD
import React from "react";
import './Riwayat.css';
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
import { Link } from "react-router-dom";
import { BsFileEarmarkArrowDown, BsFileEarmarkPlus } from 'react-icons/bs';

function Riwayat(){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteRiwayat = (a) => {
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
                  <p className="type-modal">Apakah anda yakin menghapus riwayat ini ?</p>
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
          <p className="type-name-page">Riwayat</p>
          <div className="left-button">
            <Link to="/user/riwayat/tambah-riwayat">
              <Button size='md' colorScheme='green' className="tambah-button">
                <p>Tambah</p>
                <BsFileEarmarkPlus/>
              </Button>
            </Link>
            <Link to="/user/riwayat/cetak-riwayat">
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
                  <Th textAlign="center">TANGGAL</Th>
                  <Th textAlign="center">BERAT BADAN</Th>
                  <Th className="text-numeric-table" isNumeric>PAGI</Th>
                  <Th className="text-numeric-table" isNumeric>SIANG</Th>
                  <Th className="text-numeric-table" isNumeric>MALEM</Th>
                  <Th className="text-numeric-table" isNumeric>TOTAL</Th>
                  <Th textAlign="center">UBAH/HAPUS</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td textAlign="center">10-10-2022</Td>
                  <Td textAlign="center">50 Kg</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>900</Td>
                  <Th  className="button-action">
                    <Link to="/user/riwayat/ubah-riwayat">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
                <Tr>
                  <Td textAlign="center" >10-10-2022</Td>
                  <Td textAlign="center" >50 Kg</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>900</Td>
                  <Th className="button-action">
                    <Link to="/user/riwayat/ubah-riwayat">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
               <Tr>
                  <Td textAlign="center">10-10-2022</Td>
                  <Td textAlign="center">50 Kg</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>900</Td>
                  <Th className="button-action">
                    <Link to="/user/riwayat/ubah-riwayat">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

=======
import React from "react";
import './Riwayat.css';
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
import { Link } from "react-router-dom";
import { BsFileEarmarkArrowDown, BsFileEarmarkPlus } from 'react-icons/bs';

function Riwayat(){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteRiwayat = (a) => {
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
                  <p className="type-modal">Apakah anda yakin menghapus riwayat ini ?</p>
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
          <p className="type-name-page">Riwayat</p>
          <div className="left-button">
            <Link to="/user/riwayat/tambah-riwayat">
              <Button size='md' colorScheme='green' className="tambah-button">
                <p>Tambah</p>
                <BsFileEarmarkPlus/>
              </Button>
            </Link>
            <Link to="/user/riwayat/cetak-riwayat">
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
                  <Th textAlign="center">TANGGAL</Th>
                  <Th textAlign="center">BERAT BADAN</Th>
                  <Th className="text-numeric-table" isNumeric>PAGI</Th>
                  <Th className="text-numeric-table" isNumeric>SIANG</Th>
                  <Th className="text-numeric-table" isNumeric>MALEM</Th>
                  <Th className="text-numeric-table" isNumeric>TOTAL</Th>
                  <Th textAlign="center">UBAH/HAPUS</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td textAlign="center">10-10-2022</Td>
                  <Td textAlign="center">50 Kg</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>900</Td>
                  <Th  className="button-action">
                    <Link to="/user/riwayat/ubah-riwayat">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
                <Tr>
                  <Td textAlign="center" >10-10-2022</Td>
                  <Td textAlign="center" >50 Kg</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>900</Td>
                  <Th className="button-action">
                    <Link to="/user/riwayat/ubah-riwayat">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
               <Tr>
                  <Td textAlign="center">10-10-2022</Td>
                  <Td textAlign="center">50 Kg</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>300</Td>
                  <Td className="text-numeric-table" isNumeric>900</Td>
                  <Th className="button-action">
                    <Link to="/user/riwayat/ubah-riwayat">
                      <Button colorScheme='blue' size='xs'>
                        Ubah
                      </Button>
                    </Link>
                    <Button colorScheme='red' size='xs' onClick={onOpen}>
                      Hapus
                    </Button>
                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

>>>>>>> a14033f5d99fb3bbefa57fc135b1e1d182b5ca35
export default Riwayat;