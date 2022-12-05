import { X } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
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
            <button id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button>
            <ul id='mobile-menu'>
                <li data-aos="zoom-out">
                    <Link to="/">Web & UX</Link>
                </li>
                <li data-aos="zoom-out" data-aos-delay="100">
                    <Link to="/artists">Animation</Link>
                </li>
                <li data-aos="zoom-out" data-aos-delay="200">
                    <Link to="/shop">Film & Television</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu