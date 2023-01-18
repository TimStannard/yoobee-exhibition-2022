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

    // pull out and format photos and captions
    const ProjectPhotos = () => {

        const mappedCaptions = studentData.photos.map((photo, index) => {
            return (
                <div className="photo-with-caption" key={index} data-aos="zoom-out-left" data-aos-delay="250">
                    <img src={`student-images/film/projects/${studentData.project_slug}/${studentData.slug}/${(index + 1)}.jpg`} alt={photo.caption} />
                    <p>{photo.caption}</p>
                </div>
            )
        });
        return mappedCaptions;
    }

    return (
        <div id="student-page" className="page-container container-lg film-tv">
            <div id="bubble-1" className="bubble">
                <img src={bubble} alt="colourful bubble background decal" />
            </div>
            {/* this only shows on desktop */}
            <div id="desktop-student-details" className="hide-on-mobile">
                <div className="image-column">
                    <div id="desktop-display-pic" data-aos="zoom-out" data-aos-delay="100" style={{ backgroundImage: "url(" + studentData.headshot + ")", }}></div>
                </div>
                <div id="text-column">
                    <Link to="/film">
                        <div className="breadcrumbs" data-aos="zoom-out">Film and TV</div>
                    </Link>
                    <div className="student-name" data-aos="zoom-out" data-aos-delay="50">
                        <h1>{studentData.name}</h1>
                    </div>
                    <div className="socials-container" data-aos="zoom-out" data-aos-delay="150">
                        {!loading && <SocialMediaLinks student={studentData} />}
                    </div>

                </div>
            </div>
            <div className="hide-on-desktop">
                <div id="student-details">
                    <Link to="/film">
                        <div className="breadcrumbs" data-aos="zoom-out">Film and TV</div>
                    </Link>
                    <div id="student-name" data-aos="zoom-out" data-aos-delay="50">
                        <h1>{studentData.name}</h1>
                    </div>
                </div>
                <div className="socials-container" data-aos="zoom-out" data-aos-delay="150">
                    {!loading && <SocialMediaLinks student={studentData} />}
                </div>
            </div>

            <img id="student-headshot" data-aos="zoom-out" data-aos-delay="100" src={studentData.headshot} alt={studentData.name + " headshot"} />
            <div id="film-project-details">
                <div id="project-text">
                    <h2 data-aos="zoom-out" data-aos-delay="200">Project: <br />{studentData.project}</h2>
                    <h4 data-aos="zoom-out" data-aos-delay="250">Role</h4>
                    <p className="p-description" data-aos="zoom-out" data-aos-delay="300">{studentData.role}</p>
                    <div className="back-button-container hide-on-mobile">
                        <Link to="/film">
                            <button className="button go-back student-page-button" data-aos="zoom-out-up"><ArrowLeft /> Back to Film and TV</button>
                        </Link>
                    </div>
                </div>
                <div id="project-stills">
                    {!loading && <ProjectPhotos />}
                </div>
                <div className="back-button-container hide-on-desktop">
                    <Link to="/film">
                        <button className="student-page-button button go-back" data-aos="zoom-out-up"><ArrowLeft /> Back to Film and TV</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Student