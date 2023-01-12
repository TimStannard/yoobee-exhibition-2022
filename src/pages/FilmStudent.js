// hooks
import { useEffect, useState } from "react";
// router
import { useParams, Link } from "react-router-dom";
// student data
import { filmData } from '../data/filmStudentData';
// images
import bubble from '../img/bubble.svg';
// icons
import { ArrowLeft } from 'react-bootstrap-icons';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
// get components
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

    // grab student data
    useEffect(() => {
        for (let i = 0; i < filmData.length; i++) {
            if (filmData[i].slug === slug) {
                const currentStudent = filmData[i];
                updateStudentData(currentStudent);
                setLoading(false);
            }
        }
    }, []);

    return (
        <div id="student-page" className="page-container container-lg film-tv">
            <div id="bubble-1" className="bubble">
                <img src={bubble} alt="colourful bubble background decal" />
            </div>
            <div id="student-details">
                <Link to="/WebUx">
                    <div id="breadcrumbs" data-aos="zoom-out">Film and TV</div>
                </Link>
                <div id="student-name" data-aos="zoom-out" data-aos-delay="50">
                    <h1>{studentData.name}</h1>
                </div>
            </div>
            <div id="socials-container" data-aos="zoom-out" data-aos-delay="150">
                {!loading && <SocialMediaLinks student={studentData} />}
            </div>
            <h2 data-aos="zoom-out" data-aos-delay="200">Project: {studentData.project}</h2>
            <h4 data-aos="zoom-out" data-aos-delay="250">Role</h4>
            <p className="p-description" data-aos="zoom-out" data-aos-delay="300">{studentData.role}</p>
            <div id="back-button-container">
                <Link to="/film">
                    <button id="student-page-button" className="button go-back" data-aos="zoom-out-up"><ArrowLeft /> Back to Film and TV</button>
                </Link>
            </div>
        </div>
    )
}

export default Student