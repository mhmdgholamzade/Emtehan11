import React from 'react';
import { Outlet } from 'react-router-dom';
import Preloader from './Preloader';
import Navgition from './Navgition';

function Layout() {
  return (
    <>
      <Preloader />
      <Navgition />
      
      <main>
        <Outlet />
      </main>
      
    </>
  );
}

export default Layout;
