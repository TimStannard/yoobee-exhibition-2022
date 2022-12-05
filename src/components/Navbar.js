// import dependancies
import { Link } from "react-router-dom";
import { useState } from 'react'
import { List, Search } from 'react-bootstrap-icons';
import MobileMenu from './MobileMenu'

import logo from '../img/logo-white.png';

const Navbar = () => {
    // search string state
    // this collects the user's search
    const [searchString, updateSearch] = useState("")

    // we need to include on and off state in navbar so we can open the navbar/close button
    // declare our menu state and a function to openMenu
    const [menuIsOpen, openMenu] = useState(false);
    // this function toggles the state of openMenu
    const toggleMobileMenu = () => {
        // test open only using true
        // openMenu(true);
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
                        <Link to="/">Web & UX</Link>
                    </li>
                    <li>
                        <Link to="/artists">Animation</Link>
                    </li>
                    <li>
                        <Link to="/shop">Film & Television</Link>
                    </li>
                    <li>
                        <form id="search-form" onSubmit={event => { event.preventDefault() }}>
                            <input
                                id="search-bar"
                                type="text"
                                placeholder="Search..."
                                required
                                onChange={
                                    (event) => {
                                        updateSearch(event.target.value)
                                    }
                                }
                            />
                            {searchString !== "" ?
                                <Link to={`/search-results/${searchString}`}>
                                    <button id="submit-search">
                                        <Search />
                                    </button>
                                </Link> :
                                <button id="submit-search">
                                    <Search />
                                </button>
                            }
                        </form>
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