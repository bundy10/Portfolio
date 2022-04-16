import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const navClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
    <nav className="Navbar">
      <div className="navbar-con">
        <Link to='/' className="navbar-logo">
          TRVL <i className="fa-solid fa-cog fa-spin"></i>
        </Link>
        <div className="menu-icon" onClick = {navClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMenu}>
                About
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/work' className='nav-links' onClick={closeMenu}>
                Work
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMenu}>
                Contact
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMenu}>
                Blog
              </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar