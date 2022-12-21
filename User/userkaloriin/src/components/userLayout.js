<<<<<<< HEAD
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

=======
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

>>>>>>> a14033f5d99fb3bbefa57fc135b1e1d182b5ca35
export default UserLayout;