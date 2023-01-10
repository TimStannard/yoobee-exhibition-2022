// hooks
import { useEffect, useState } from "react";
// router
import { useParams, Link } from "react-router-dom";
// student data
import { animationData } from '../data/animationStudentData';
// images
import bubble from '../img/bubble.svg';
// icons
import { ArrowLeft } from 'react-bootstrap-icons';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        for (let i = 0; i < animationData.length; i++) {
            if (animationData[i].slug === slug) {
                const currentStudent = animationData[i];
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
            <div id="bubble-2" className="bubble">
                <img src={bubble} alt="colourful bubble background decal" />
            </div>
            <div id="student-details">
                <Link to="/animation">
                    <div id="breadcrumbs" data-aos="zoom-out">Animation</div>
                </Link>
                <h1 id="student-name" data-aos="zoom-out" data-aos-delay="50">{studentData.name}</h1>
            </div>
            <img id="student-headshot" data-aos="zoom-out" data-aos-delay="100" src={studentData.headshot} alt={studentData.name + " headshot"} />
            <h2 data-aos="zoom-out" data-aos-delay="200">{studentData.project}</h2>
            {/* image */}
            <h4>Showreel</h4>
            <video width="100%" height="240" controls autoPlay>
                <source src={`http://ignite.yoobeestudent.net/${slug}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Link to="/animation">
                <button id="student-page-button" className="button go-back" data-aos="zoom-out-up"><ArrowLeft /> Back to Animation</button>
            </Link>
        </div>
    )
}

export default Student