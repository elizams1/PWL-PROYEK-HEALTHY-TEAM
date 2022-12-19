import React, {useState, useEffect} from "react";
import { 
  Button,
  Input } from '@chakra-ui/react';
import './Beranda.css'; 
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
function Beranda(){
  const [KatalogData,setKatalogData] =useState([]);

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
        {KatalogData!=null ?
          KatalogData.map(item => 
            <>
              <div className="card-item">
                <div className="card-image">
                  <img className="card-img-set" src={`${ item.katalog_gambar }`} alt="the-photos"/>
                </div>
                <div className="card-name">
                  <p className="the-card-name">{item.katalog_nama}</p>
                </div>
                <div className="card-detail">
                  <p className="the-card-detail">{item.katalog_berat}</p>
                  <p className="the-card-detail">{item.katalog_kalori}</p>
                </div>
              </div>
            </>
          ) : <>
            <p>DATA TIDAK ADA</p>
          </>
        }
        </div>
      </div>
    </div>
  );
}

export default Beranda;