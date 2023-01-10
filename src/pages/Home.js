
// ----------imports
// hooks
import { useEffect, useRef } from "react";
// components
import StudentSpotlight from "../components/StudentSpotlight";
// routing
import { Link } from "react-router-dom";
// images
import bubble from '../img/bubble.svg';
import squiggle from '../img/squiggle.svg';
import heroLogo from '../img/hero-logo-reversed.svg';
// icons
import { ArrowDownCircle } from 'react-bootstrap-icons';
import webUxIcon from '../img/web-ux-icon.svg';
import animationIcon from '../img/animation-icon.svg';
import filmIcon from '../img/film-icon.svg';
// get data for random student
import { animationData } from '../data/animationStudentData';
import { webData } from '../data/webStudentData';
import { filmData } from '../data/filmStudentData';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const randomStudentLink = () => {

    // get all web students
    const webStudents = webData.map((student) => {
        student.faculty = "webUx";
        return student;
    })
    // get all animation students
    const animationStudents = animationData.map((student) => {
        student.faculty = "animation";
        return student;
    })
    // get all film tv students
    const filmStudents = filmData.map((student) => {
        student.faculty = "film";
        return student;
    })

    const allStudents = [...webStudents, ...animationStudents, ...filmStudents];

    console.log(allStudents);

    // generate random number to choose a random student
    const randomUniqueNumber = Math.floor(Math.random() * allStudents.length - 1) + 1;
    // student 
    const randomlyChosenStudent = allStudents[randomUniqueNumber];
    return `${randomlyChosenStudent.faculty}/student/${randomlyChosenStudent.slug}`
}

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
            <div id="main" className="container-lg">
                <div id="bubble-1" className="bubble">
                    <img src={bubble} alt="colourful bubble background decal" />
                </div>
                <div id="hero">
                    <img id="home-logo" src={heroLogo} data-aos="zoom-out" alt="full size exhibition logo" />
                    <p id="tagline" data-aos="zoom-out" data-aos-delay="50" >
                        A showcase of our graduating students’ postgraduate work — in Web & UX design, Animation, and Film.
                    </p>
                    <div id="hero-squiggle" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1500">
                        <img src={squiggle} alt="white squiggle pointing to next section" />
                    </div>
                    <button className="arrow-down" data-aos="zoom-out" data-aos-delay="100" data-aos-anchor=".container-lg" onClick={handleScroll}>
                        <ArrowDownCircle />
                    </button>
                </div>
                <div id="featured" className="page-section">
                    <h2 data-aos="zoom-out-down" data-aos-delay="150" ref={ref}>Student Spotlight</h2>
                    <StudentSpotlight />
                    <Link to={randomStudentLink()}>
                        <button data-aos="zoom-out-down" className="button regular">View a random student 👀</button>
                    </Link>
                </div>
                <div id="bubble-2" className="bubble">
                    <img src={bubble} alt="colourful bubble background decal" />
                </div>

                <div id="faculties" className="page-section">
                    <h2 data-aos="zoom-out-down">Faculties</h2>
                    <div className="faculty-row">
                        <Link to="/webUx">
                            <div className="faculty-item">
                                <img src={webUxIcon} alt="icon web ux" data-aos="zoom-out" />
                                <h3 data-aos="zoom-out">Web & UX</h3>
                            </div>
                        </Link>
                        <Link to="/animation">
                            <div className="faculty-item">
                                <img src={animationIcon} alt="icon Animation" data-aos="zoom-out" />
                                <h3 data-aos="zoom-out">Animation</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="faculty-row">
                        <Link to="/film">
                            <div className="faculty-item">
                                <img src={filmIcon} alt="icon film television" data-aos="zoom-out" />
                                <h3 data-aos="zoom-out">Film and Television</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home