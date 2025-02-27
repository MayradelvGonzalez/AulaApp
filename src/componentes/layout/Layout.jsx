import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import AsideLeft from '../asideLeft/AsideLeft';
import AsideRight from '../asideRight/AsideRight';
import Footer from '../footer/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <AsideLeft />
        <Main />
        <AsideRight />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;