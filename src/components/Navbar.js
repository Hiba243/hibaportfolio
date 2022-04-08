import { useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../assets/Hiba_Resume.pdf'
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
      <Link to="/"><p className="nav__logo">Portfolio</p></Link>
        <ul className="nav__menu" ref={refNavMenu}>
        <li className="nav__item">
          <Link to="/#work"><p className="nav__link link-effect" onClick={closeMenu}>Work</p></Link>
          </li>
          <li className="nav__item">
          <Link to="/#about"><p className="nav__link link-effect" onClick={closeMenu}
            >About</p></Link>
          </li>
          <li className="nav__item">
          <Link to="/#contact"><p  className="nav__link link-effect" onClick={closeMenu}
            >Contact</p
            ></Link>
          </li>
          <li className="nav__item">
          <a href={Resume} target='_blank' rel="noreferrer">
          <p  className="nav__link link-effect" onClick={closeMenu}>Resume</p>
            </a>
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