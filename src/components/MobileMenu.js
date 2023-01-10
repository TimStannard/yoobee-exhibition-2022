import { X } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
// img
import webUxIcon from '../img/web-ux-icon.svg';
import animationIcon from '../img/animation-icon.svg';
import filmIcon from '../img/film-icon.svg';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileMenu = ({ closeMethod }) => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back'
        });
    }, [])
    return (
        <>
            <button data-aos="fade-down" data-aos-delay="150" id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button>
            <div id="menu-wrapper">
                <ul id='mobile-menu'>
                    <li data-aos="zoom-out-down">
                        <Link to="/webUx" onClick={closeMethod}>
                            <img src={webUxIcon} alt="icon web ux" />
                            <div>Web & UX</div>
                        </Link>
                    </li>
                    <li data-aos="zoom-out" data-aos-delay="50">
                        <Link to="/animation" onClick={closeMethod}>
                            <img src={animationIcon} alt="icon animation" />
                            <div>Animation</div>
                        </Link>
                    </li>
                    <li data-aos="zoom-out-up" data-aos-delay="100">
                        <Link to="/film" onClick={closeMethod}>
                            <img src={filmIcon} alt="icon film" />
                            <div>Film & Television</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu