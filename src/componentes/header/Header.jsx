// import React, { useEffect } from 'react';
// import './Header.css';
// import { useLocation } from 'react-router-dom';
// import imagen from '../img/MENTAGIF.gif';



// function Header() {
//     const location = useLocation(); // Obtiene la ubicación actual

//     useEffect(() => {
//         const botones = document.querySelectorAll('.back-button, .button');

//         botones.forEach(boton => {
//             const href = boton.getAttribute('href');
//             if (href === location.pathname) { // Compara href con la ruta actual
//                 boton.classList.add('active'); // Añade la clase 'active'
//             } else {
//                 boton.classList.remove('active'); // Remueve la clase 'active'
//             }
//         });
//     }, [location]); // El efecto se ejecuta cuando cambia la ubicación

//     return (
//         <header className="header">
//             <div id='contenedorHeader'>
//                 <div className='texto'>
//                     <h2>APP</h2>
//                 </div>
//                 <div className='i'>
//                     <img alt="logo" id='logo' src={imagen} />
//                 </div>
//                 <a href="/" className="back-button" aria-label="inicio">Inicio</a>
//                 <a href="/sector1" className="button" aria-label="5° grado">5° grado</a>
//                 <a href="/sector2" className="button" aria-label="6° grado">6° grado</a>
//             </div>
//         </header>
//     );
// }

// export default Header;

import React, { useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import imagen from '../img/MENTAGIF.gif';

const Header = () => {
  return <main className="header">
  
  
  <div id='contenedorHeader'>
                <div className='texto'>
                    <h2>AulaApp</h2>
                </div>
                <div className='i'>
                    <img alt="logo" id='logo' src={imagen} />
                </div>
                <div className='menu'>
                <a href="/" className="back-button" aria-label="inicio">Inicio</a>
                <a href="/secto" className="button" aria-label="5° grado">5° grado</a>
                <a href="/sector2" className="button" aria-label="6° grado">6° grado</a>

                </div>
              
            </div>

  </main>;

};

export default Header;