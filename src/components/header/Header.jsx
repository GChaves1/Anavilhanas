import React, { useState, useEffect } from 'react';
import './header.css';
import IMG from '../../image/logo.png';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {

        const changeBackground = () => {
            if (window.scrollY >=80) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }

        window.addEventListener('scroll', changeBackground)
  }, []);



    
  return (
    <header className={navbar ? 'navbar active' : 'navbar'}>
      <nav className='nav container'>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="list__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
              >
                HOME
              </a>
            </li>
            <li className="list__item">
              <a
                href="#hotel"
                onClick={() => setActiveNav('#hotel')}
                className={activeNav === '#hotel' ? 'nav__link active-link' : 'nav__link'}
              >
                HOTEL
              </a>
            </li>
            <li className="list__item">
              <a
                href="#experiencia"
                onClick={() => setActiveNav('#experiencia')}
                className={activeNav === '#experiencia' ? 'nav__link active-link' : 'nav__link'}
              >
                EXPERIENCIA
              </a>
            </li>
          </ul>
          <a href="#home" className="nav__logo">
            <img src={IMG} alt="logo" />
          </a>
          <ul className="nav__list grid">
            <li className="list__item">
              <a
                href="#contato"
                onClick={() => setActiveNav('#contato')}
                className={activeNav === '#contato' ? 'nav__link active-link' : 'nav__link'}
              >
                CONTATO
              </a>
            </li>
            <li className="list__item">
              <a
                href="#feedback"
                onClick={() => setActiveNav('#feedback')}
                className={activeNav === '#feedback' ? 'nav__link active-link' : 'nav__link'}
              >
                FEEDBACK
              </a>
            </li>
            <li className="list__item">
              <a
                href="#agenda"
                onClick={() => setActiveNav('#agenda')}
                className={activeNav === '#agenda' ? 'nav__link active-link' : 'nav__link'}
              >
                 AGENDA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
