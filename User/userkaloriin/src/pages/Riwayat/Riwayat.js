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
} from '@chakra-ui/react';
import { BsFileEarmarkArrowDown, BsFileEarmarkPlus } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

function Riwayat(){
  return(
    <div className="content">
      <div className="riwayat">
        <div className="top-riwayat">
          <p className="type-name-page">Riwayat</p>
          <div className="left-button">
            <Button colorScheme='green' className="tambah-button">
              <p>Tambah</p>
              <BsFileEarmarkPlus/>
            </Button>
            <Button color='#155D27' className="cetak-button">
              <p>Cetak</p>
              <BsFileEarmarkArrowDown/>
            </Button>
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
                    <Button colorScheme='blue' size='xs'>
                      Ubah
                    </Button>
                    <Button colorScheme='red' size='xs'>
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
                    <Button colorScheme='blue' size='xs'>
                      Ubah
                    </Button>
                    <Button colorScheme='red' size='xs'>
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
                    <Button colorScheme='blue' size='xs'>
                      Ubah
                    </Button>
                    <Button colorScheme='red' size='xs'>
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

export default Riwayat;