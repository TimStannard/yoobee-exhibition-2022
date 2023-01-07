// hooks
import { useEffect, useState } from "react";
// router
import { useParams, Link } from "react-router-dom";
// student data
import { webData } from '../data/webStudentData';
// images
import bubble from '../img/bubble.svg';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
// get modal
import ProjectModal from "../components/ProjectModal"

const useStudentData = (type) => {
    const params = useParams();
    const slug = params.name;

    for (let i = 0; i < webData.length; i++) {
        if (webData[i].slug === slug) {
            const currentStudent = webData[i];
            if (type === "projects") {
                return currentStudent.projects;
            } else if (type === "name") {
                return currentStudent.name;
            } else if (type === "headshot") {
                return currentStudent.headshot;
            }
        }
    }
}

const Projects = ({ openModal, setProject }) => {
    // get the slug
    const params = useParams();
    const slug = params.name;

    // get projects
    const projects = useStudentData("projects");
    const renderedProjects = projects.map((project, index) => {
        return (
            <div className="project-item" key={index} onClick={() => {
                console.log("clicked")
                console.log(project)
                setProject(project);
                openModal();
            }}>
                <img data-aos="zoom-in" className="project-image" src={"/student-images/web-ux/projects/" + slug + "/" + project.images[0]} alt={project.title + "screenshot"} />
                <h4 data-aos="zoom-in">
                    {project.title}
                </h4>
            </div>
        )
    })

    return (
        <div className="project-container">
            {renderedProjects}
        </div>
    )
}

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

    // our states for modal
    const [modalOpen, toggleModal] = useState(false)
    const [project, updateProject] = useState({})

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
            <div id="bubble-2" className="bubble">
                <img src={bubble} alt="colourful bubble background decal" />
            </div>
            <div id="student-details">
                <Link to="/WebUx">
                    <div id="breadcrumbs" data-aos="zoom-out">Web & UX</div>
                </Link>
                <h1 id="student-name" data-aos="zoom-out" data-aos-delay="50">{useStudentData("name")}</h1>
            </div>
            <img id="student-headshot" data-aos="zoom-out" data-aos-delay="100" src={useStudentData("headshot")} alt={useStudentData("name") + " headshot"} />
            <h2 data-aos="zoom-out" data-aos-delay="150">Projects</h2>
            <Projects openModal={setModal} setProject={updateProject} />
            {modalOpen && <ProjectModal currentProject={project} closeMethod={setModal} currentSlug={slug} />}
        </div>
    )
}

export default Student