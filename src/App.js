import React from 'react';
import './App.css';
import Carrousel from './carrousel/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <AsideLeft />
        <MainContent />
        <div className="aside-right-container">
          <AsideRightTop />
          <AsideRightBottom />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="menu">
      <h1>Encabezado</h1>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="main">
      <p>Contenido principal</p>
<div><Carrousel /></div>
       
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>Pie de página</p>
    </footer>
  );
};

const AsideLeft = () => {
  return (
    <aside className="bienvenida">
      <p>Barra lateral izquierda</p>
    </aside>
  );
};

const AsideRightTop = () => {
  return (
    <aside className="aside-right-top">
      <p>Barra lateral derecha superior</p>
    </aside>
  );
};

const AsideRightBottom = () => {
  return (
    <aside className="aside-right-bottom">
      <p>Barra lateral derecha inferior</p>
    </aside>
  );
};

export default App;