import { useRef } from 'react';

const Navbar = () => {

  const refHamburger = useRef();
  const refNavMenu = useRef();

  function mobileMenu() {
    const hamburger = refHamburger.current;
    const navMenu = refNavMenu.current;
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    var bodyelem;
    if (hamburger.classList.contains('active')) {
      bodyelem = document.getElementsByTagName('body');
      bodyelem[0].style.overflow = 'hidden';
    }
    else {
      bodyelem = document.getElementsByTagName('body');
      bodyelem[0].style.overflow = 'visible';
    }
  }

  function closeMenu() {
    const hamburger = refHamburger.current;
    const navMenu = refNavMenu.current;
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    var bodyelem = document.getElementsByTagName('body');
    bodyelem[0].style.position = 'relative';
    bodyelem[0].style.overflow = 'visible';
  }

  return (
    <header className="navbar-padding">
      <nav className="navbar-content">
        <p className="nav__logo">Portfolio 2022</p>
        <ul className="nav__menu" ref={refNavMenu}>
          <li className="nav__item">
            <a href="#about" className="nav__link link-effect" onClick={closeMenu}
            >About</a
            >
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link link-effect" onClick={closeMenu}>Work</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link link-effect" onClick={closeMenu}
            >Get In Touch</a
            >
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link link-effect" onClick={closeMenu}
            >Resume</a
            >
          </li>
        </ul>
        <div className="hamburger" ref={refHamburger} onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;