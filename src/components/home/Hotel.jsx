import React, { useState, useEffect } from 'react';
import './hotel.css';
import IMG1 from '../../image/front_hotel1.png';
import IMG2 from '../../image/front_hotel2.png';
import IMG3 from '../../image/front_hotel3.png';

const Hotel = () => {
  const images = [IMG1, IMG2, IMG3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); 
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [images.length]);

  return (
    <section className="hotel section" id="hotel">
      <div className="hotel__container ">
        <div className="hotel__image-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`hotel__image ${currentIndex === index ? 'active' : ''}`}
              src={image}
              alt=""
            />
          ))}
        </div>
        <div className="hotel__box container">
          <ul className="hotel__list">
            <li className="hotel__item">
              <span className="test">CHECK-IN</span>
              <button type="button" className="hotel__people">
                22 jun
              </button>
            </li>
            <li className="hotel__item">
              <span className="test">CHECK-OUT</span>
              <button type="button" className="hotel__people">
                22 jun
              </button>
            </li>
            <li className="hotel__item">
              <div className="">
                <span className="test">PESSOAS</span>
                <button type="button" className="hotel__people">
                  2 PESSOAS
                </button>
              </div>
            </li>
            <li className="hotel__item">
              <div className="">
                <span className="test"></span>
                <button type="button" className="hotel__people">
                  verificar disponibilidade
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
