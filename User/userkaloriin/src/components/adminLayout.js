import AdminHeader from './AdminHeader/AdminHeader.js';
import {Outlet} from 'react-router-dom';

import React from 'react';

function AdminLayout(){

  return (
    <>
      <AdminHeader />
      <Outlet/>
    </>
  )
}

export default AdminLayout;