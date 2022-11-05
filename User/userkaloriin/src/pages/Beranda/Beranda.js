import React from "react";
import { 
  Button,
  Input } from '@chakra-ui/react';
import './Beranda.css'; 
import {BsSearch} from 'react-icons/bs';
function Beranda(){
  return(
    <div className="content">
      <div className="beranda">
        <div className="top-beranda">
          <p className="type-name-page">Beranda</p>
          <div className="search-fitur">
            <Input fontSize="xs" placeholder="Cari Makanan Minuman" focusBorderColor='darkgreen' />
            {/* value={value} onChange={} */}
              <Button size='md' color='#155D27' ><BsSearch/></Button>
            {/* onClick={()=> getNewsList(null,value)}><BsSearch/ */}
          </div>
        </div>
        <div className="catalog-beranda">
          <div className="card-item">
            <div className="card-image">
              <img className="card-img-set" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
            </div>
            <div className="card-name">
              <p className="the-card-name">Apel</p>
            </div>
            <div className="card-detail">
              <p className="the-card-detail">100 gr</p>
              <p className="the-card-detail">52 kkal</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-image">
              <img className="card-img-set" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
            </div>
            <div className="card-name">
              <p className="the-card-name">Apel</p>
            </div>
            <div className="card-detail">
              <p className="the-card-detail">100 gr</p>
              <p className="the-card-detail">52 kkal</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-image">
              <img className="card-img-set" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
            </div>
            <div className="card-name">
              <p className="the-card-name">Apel</p>
            </div>
            <div className="card-detail">
              <p className="the-card-detail">100 gr</p>
              <p className="the-card-detail">52 kkal</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-image">
              <img className="card-img-set" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
            </div>
            <div className="card-name">
              <p className="the-card-name">Apel</p>
            </div>
            <div className="card-detail">
              <p className="the-card-detail">100 gr</p>
              <p className="the-card-detail">52 kkal</p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-image">
              <img className="card-img-set" src={require("../../assets/profilPhoto.jpg")} alt="the-photos"></img>
            </div>
            <div className="card-name">
              <p className="the-card-name">Apel</p>
            </div>
            <div className="card-detail">
              <p className="the-card-detail">100 gr</p>
              <p className="the-card-detail">52 kkal</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Beranda;