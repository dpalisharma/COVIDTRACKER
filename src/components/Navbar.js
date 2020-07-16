import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper white">
        <div className="container">
        <Link to='/' className="brand-logo"><img src={logo} alt=""/> </Link>
          <a href="index.html" className="sidenav-trigger" data-target="mobile-menu">
            <i  className="black-text material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/Global'  className="black-text navitem">Global Status</Link></li>
            <li><Link to='/India'  className="black-text navitem">India Status</Link></li>
            <li><Link to='/About'  className="black-text navitem"> About</Link></li>
          </ul>
          <ul className="sidenav white" id="mobile-menu">
          <li><Link to='/Global'  className="black-text navitem">Global Status</Link></li>
            <li><Link to='/India'  className="black-text navitem">India Status</Link></li>
            <li><Link to='/About'  className="black-text navitem"> About</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
