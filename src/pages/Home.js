
// ----------imports
// hooks
import { useEffect, useRef } from "react";
// components
import FeaturedProjects from "../components/FeaturedProjects";
// images
import bubble from '../img/bubble.svg';
import heroLogo from '../img/hero-logo.svg';
// icons
import { ArrowDownCircle } from 'react-bootstrap-icons';
import webUxIcon from '../img/web-ux-icon.svg';
import animationIcon from '../img/animation-icon.svg';
import filmIcon from '../img/film-icon.svg';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    // -------AOS
    // docs: https://github.com/michalsnik/aos
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back',
            once: true

        });
    }, [])

    // -------scroll down
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // -------returned JSX
    return (
        <>
            <div id="home" className="container-lg">
                <div id="bubble-1" className="bubble">
                    <img src={bubble} alt="colourful bubble background decal" />
                </div>
                <div id="hero">
                    <img src={heroLogo} data-aos="zoom-out" alt="full size exhibition logo" />
                    <p id="tagline" data-aos="zoom-out" data-aos-delay="200" >
                        A showcase of our graduating students’ postgraduate work—in Web & UX design, Animation, and Film.
                    </p>
                    <button className="arrow-down" data-aos="zoom-out" data-aos-delay="400" ref={ref} onClick={handleScroll}>
                        <ArrowDownCircle />
                    </button>
                </div>
                <div id="featured" className="page-section">
                    <h2 data-aos="zoom-out-down" data-aos-delay="600">Featured Projects</h2>
                    <FeaturedProjects />
                </div>
                <div id="bubble-2" className="bubble">
                    <img src={bubble} alt="colourful bubble background decal" />
                </div>

                <div id="faculties" className="page-section">
                    <h2 data-aos="zoom-out-down">Faculties</h2>
                    <div className="faculty-row">
                        <div className="faculty-item">
                            <img src={webUxIcon} alt="icon web ux" data-aos="zoom-out" />
                            <h3 data-aos="zoom-out">Web & UX</h3>
                        </div>
                        <div className="faculty-item">
                            <img src={animationIcon} alt="icon Animation" data-aos="zoom-out" />
                            <h3 data-aos="zoom-out">Animation</h3>
                        </div>
                    </div>
                    <div className="faculty-row">
                        <div className="faculty-item">
                            <img src={filmIcon} alt="icon film television" data-aos="zoom-out" />
                            <h3 data-aos="zoom-out">Film and Television</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home