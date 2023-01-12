// hooks
import { useEffect, useState } from "react";
// router
import { useParams, Link } from "react-router-dom";
// student data
import { webData } from '../data/webStudentData';
// images
import bubble from '../img/bubble.svg';
// icons
import { ArrowLeft } from 'react-bootstrap-icons';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
// get components
import ProjectModal from "../components/ProjectModal"
import { Projects } from "../components/Projects"
import { SocialMediaLinks } from "../components/SocialMediaLinks"

const Student = () => {
    const params = useParams();
    const slug = params.name;
    // -------AOS
    // docs: https://github.com/michalsnik/aos
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back',
            once: true

        });
    }, [])

    // -----states
    // student data
    const [studentData, updateStudentData] = useState({});
    const [loading, setLoading] = useState(true);
    // our states for modal
    const [modalOpen, toggleModal] = useState(false)
    const [project, updateProject] = useState({})

    // grab student data
    useEffect(() => {
        for (let i = 0; i < webData.length; i++) {
            if (webData[i].slug === slug) {
                const currentStudent = webData[i];
                updateStudentData(currentStudent);
                setLoading(false);
            }
        }
    }, []);

    // function to toggle the modal
    const setModal = () => {
        toggleModal(!modalOpen)
        // toggle no scroll on body
        document.body.classList.toggle('no-scroll');
    }

    return (
        <div id="student-page" className="page-container container-lg">
            <div id="bubble-1" className="bubble">
                <img src={bubble} alt="colourful bubble background decal" />
            </div>
            <div id="student-details">
                <Link to="/WebUx">
                    <div id="breadcrumbs" data-aos="zoom-out">Web & UX</div>
                </Link>
                <div id="student-name" data-aos="zoom-out" data-aos-delay="50">
                    <span id="desktop-display-pic" data-aos="zoom-out" data-aos-delay="100" style={{ backgroundImage: "url(" + studentData.headshot + ")", }}></span>
                    <h1>{studentData.name}</h1>
                    <div id="socials-container" data-aos="zoom-out" data-aos-delay="150">
                        {!loading && <SocialMediaLinks student={studentData} />}
                    </div>
                </div>
            </div>
            <img id="student-headshot" data-aos="zoom-out" data-aos-delay="100" src={studentData.headshot} alt={studentData.name + " headshot"} />
            {/* <div id="socials-container" data-aos="zoom-out" data-aos-delay="150">
                {!loading && <SocialMediaLinks student={studentData} />}
            </div> */}
            <h2 data-aos="zoom-out" data-aos-delay="200">Projects</h2>
            {!loading && <Projects student={studentData} openModal={setModal} setProject={updateProject} />}
            <div id="back-button-container">
                <Link to="/WebUx">
                    <button id="student-page-button" className="button go-back" data-aos="zoom-out-up"><ArrowLeft /> Back to Web & UX</button>
                </Link>
            </div>
            {modalOpen && <ProjectModal currentProject={project} closeMethod={setModal} currentSlug={slug} />}
        </div>
    )
}

export default Student