import './App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navi from './components/Nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navi />
      <fCarousel />
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/foto-gratis/diagrama-comprobacion-anteojos-gafas-optometria-antecedentes-medicos_35719-310.jpg?size=626&ext=jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhUdTA7KcNJw7OGr6_ZLC1qy-7A4VXc-rYA&usqp=CAU"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhUdTA7KcNJw7OGr6_ZLC1qy-7A4VXc-rYA&usqp=CAU"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
