// ----------imports
// hooks
import { useEffect, useRef } from "react";
// icons
import { ArrowDownCircle } from 'react-bootstrap-icons';
import FilmIcon from '../img/film-icon.svg';
// components
import FilmStudents from "../components/FilmStudents";
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebUx = () => {
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
            <div id="main" className="container-lg">
                <div id="hero">
                    <div id="faculty-icon-container" data-aos="fade-in" data-aos-delay="50">
                        <img src={FilmIcon} data-aos="zoom-out" data-aos-delay="50" id="icon-header" alt="web ux icon" />
                    </div>
                    <h1 id="page-header" data-aos="zoom-out" >
                        Film and TV
                    </h1>
                    <button className="arrow-down" data-aos="zoom-out" data-aos-delay="100" ref={ref} onClick={handleScroll}>
                        <ArrowDownCircle />
                    </button>
                </div>
                <div id="students-list" className="page-section">
                    <h2 data-aos="zoom-out-down" data-aos-delay="150">Students</h2>
                    <div id="all-students-container" className="film-students-list">
                        <FilmStudents />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebUx