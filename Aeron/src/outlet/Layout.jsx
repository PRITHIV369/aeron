import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componets/Navbar';

const Layout = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-800">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
