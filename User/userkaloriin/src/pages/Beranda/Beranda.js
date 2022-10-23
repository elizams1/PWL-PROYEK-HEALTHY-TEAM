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
          
        </div>
      </div>
      
    </div>
  );
}

export default Beranda;