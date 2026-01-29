import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/footer/Footer';
import NavBar from '../pages/shared/Navbar/NavBar';

const RootLayout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
