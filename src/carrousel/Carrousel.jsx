

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen from './imagen.jpg'; 
import imagen4 from './imagen4.jpeg';
import imagen3 from './imagen3.webp';
import './carrousel.css';



function Carrousel() {
  return (
    <div className="carrousel">
    <Carousel>
    <Carousel.Item>
      <img 
      style={{ objectFit: 'contain'}} 
      className="d-block w-100" 
      alt="First slide" 
      src={imagen} 
        aria-hidden="true"
      />
      <Carousel.Caption>
        <h3>Aprender</h3>
     
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ objectFit: 'contain'}} 
    className="d-block w-100" 
    alt="Second slide" 
    src={imagen4} 
     aria-hidden="true"
      />

      <Carousel.Caption>
        <h3>Jugar</h3>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
     style={{ objectFit: 'contain' }} 
     className="d-block w-100" 
     alt="First slide" 
     src={imagen3} 
     aria-hidden="true"
      />

      <Carousel.Caption>
        <h3>Crecer</h3>
  
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Carrousel;