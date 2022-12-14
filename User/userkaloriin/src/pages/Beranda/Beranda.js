import React, {useState, useEffect} from "react";
import { 
  Button,
  Input } from '@chakra-ui/react';
import './Beranda.css'; 
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
function Beranda(){
  const [KatalogData,setKatalogData] =useState([]);
  const [value, setValue] = useState('');
  const [dataSearch, setDataSearch] = useState(KatalogData);

  useEffect(()=> {
    axios
      .get("http://localhost:3306/dataKatalog")
      .then(function (katalog){
        setKatalogData(katalog.data.data);
        console.log(katalog.data.data);
      })
      .catch(function(error){
        console.log(error);
      });
    },[]
  );
   
  function filterBySearch(value) {
    // Access input value
    const query = value;
    console.log(query);
    // Create copy of item list
    var updatedList = [...KatalogData];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.namaKatalog.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setDataSearch(updatedList);
  }; 

  function handleSearch(event) {
   setValue(event.target.value);
  };
  console.log(KatalogData)
  console.log(dataSearch);
  return(
    <div className="content">
      <div className="beranda">
        <div className="top-beranda">
          <p className="type-name-page">Beranda</p>
          <div className="search-fitur">
            <Input fontSize="xs" placeholder="Cari Makanan Minuman" focusBorderColor='darkgreen' value={value} onChange={handleSearch} />
              <Button size='md' color='#155D27' onClick={()=> filterBySearch(value)}><BsSearch/></Button>
          </div>
        </div>
        
        <div className="catalog-beranda">
        {dataSearch.length!==0 ?
          dataSearch.map(item => 
            <>
              <div className="card-item">
                <div className="card-image">
                  <img className="card-img-set" src={`http://localhost:3306/api/gambar/${ item.gambar }`} alt="the-photos"/>
                </div>
                <div className="card-name">
                  <p className="the-card-name">{item.namaKatalog}</p>
                </div>
                <div className="card-detail">
                  <p className="the-card-detail">{item.berat}</p>
                  <p className="the-card-detail">{item.kalori}</p>
                </div>
              </div>
            </>
          ) : 
          <>
            {
              KatalogData.map(item => 
              <>
                <div className="card-item">
                  <div className="card-image">
                    <img className="card-img-set" src={`http://localhost:3306/api/gambar/${ item.gambar }`} alt="the-photos"/>
                  </div>
                  <div className="card-name">
                    <p className="the-card-name">{item.namaKatalog}</p>
                  </div>
                  <div className="card-detail">
                    <p className="the-card-detail">{item.berat}</p>
                    <p className="the-card-detail">{item.kalori}</p>
                  </div>
                </div>
              </>
            )
            }
          </>
        }
        </div>
      </div>
    </div>
  );
}

export default Beranda;