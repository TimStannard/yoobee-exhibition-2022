// import dependancies
import { Link } from "react-router-dom";
import { useState } from 'react'
import { List } from 'react-bootstrap-icons';
import MobileMenu from './MobileMenu'

import logo from '../img/logo-white.png';

const Navbar = () => {
    // declare our menu state and a function to openMenu
    const [menuIsOpen, openMenu] = useState(false);
    // this function toggles the state of openMenu
    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen);
        // toggle no scroll on body
        document.body.classList.toggle('no-scroll');
    };
    return (
        <>
            <div id='topnav'>

                <div id='logo'>
                    <Link to="/">
                        <img src={logo} alt="star icon" />
                    </Link>
                </div>


                {/* Desktop Menu, which only appears on large screens */}
                <ul id='menu'>
                    <li>
                        <Link to="/webUx">Web & UX</Link>
                    </li>
                    <li>
                        <Link to="/animation">Animation</Link>
                    </li>
                    <li>
                        <Link to="/film">Film & Television</Link>
                    </li>
                </ul>

                {/* Hamburger icon, only shows up on small screens. */}
                <div id="menu-container">
                    <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id="hamburger-icon" />
                    </button>
                </div>
            </div>

            {/* If menuIsOpen, show the mobile menu*/}
            {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )
}

export default Navbar