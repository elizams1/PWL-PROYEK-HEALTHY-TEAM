import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  // membuat drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  return(
    <div className="the-header">
      <div className="the-menu-1">
        <div className="the-logo">
          <img className="logo" src={require("../../assets/logoPutihKaloriin.png")} alt="the-logos"></img>
        </div>
        <div className="menu">
          <Link to="/admin/beranda">
            <div>
              <p className="type-menu">Beranda</p>
            </div>
          </Link>
          <Link to="/admin/makanan">
            <div>
              <p className="type-menu">Makanan</p>
            </div>
          </Link>
          <Link to="/admin/pengguna">
            <div>
              <p className="type-menu">Pengguna</p>
            </div>
          </Link>
          <Link to="/admin/profil">
            <div>
              <p className="type-menu">Profil</p>
            </div>
          </Link>
          <div className="profil-photo">
             <img className="profil-photo" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
          </div>
        </div>
      </div>
      <div className="the-drawer-1">
        <div className="the-logo">
          <img className="logo" src={require("../../assets/logoPutihKaloriin.png")} alt="the-logos"></img>
        </div>
        <div className="drawer">
          <div className="button-drawer" onClick={onOpen}>
            <BsList size={35} color="#fff" className="icon"/>
          </div>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <div className="drawer-header">
                  <img className="profil-photo" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
                  <p>Nama Admin</p>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <Link to="/admin/beranda">
                  <div className="menu-drawer">
                    <p className="type-drawer">Beranda</p>
                  </div>
                </Link>
                <Link to="/admin/makanan">
                  <div className="menu-drawer">
                    <p className="type-drawer">Makanan</p>
                  </div>
                </Link>
                <Link to="/admin/pengguna">
                  <div className="menu-drawer">
                    <p className="type-drawer">Pengguna</p>
                  </div>
                </Link>
                <Link to="/admin/profil">
                  <div className="menu-drawer">
                    <p className="type-drawer">Profil</p>
                  </div>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;