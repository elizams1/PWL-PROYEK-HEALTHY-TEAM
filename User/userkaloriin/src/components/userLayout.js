import UserHeader from './UserHeader/UserHeader.js';
import {Outlet} from 'react-router-dom';
// import Footer from './components/Footer/Footer.js';

import React from 'react';

function UserLayout(){

  return (
    <>
      <UserHeader />
      <Outlet/>
    </>
  )
}

export default UserLayout;