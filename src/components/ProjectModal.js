// icons
import { X, ArrowLeft } from 'react-bootstrap-icons';
// router
import { Link } from 'react-router-dom';

const ProjectModal = ({ currentProject, closeMethod, currentSlug }) => {

    // show scrollbar after clicking breadcrumb
    const toggleScroll = () => {
        document.body.classList.toggle('no-scroll');
    };

    const renderedImages = currentProject.images.map((image, index) => {
        return (
            <img data-aos="zoom-in" key={index} className="project-mockup-image" src={"/student-images/web-ux/projects/" + currentSlug + "/" + image} alt={currentProject.title + "mockup"} />
        )
    })

    return (
        <div id="modal">
            <Link to={"/webUx"} onClick={toggleScroll}>
                <div id="project-subheader" className="hide-on-mobile" data-aos="zoom-out-down">Web & UX</div>
            </Link>
            <h1 data-aos="zoom-out-down">{currentProject.title}</h1>
            <div id="project-flex-container">
                <div id="description-container">
                    <h3 data-aos="zoom-out">About</h3>
                    <p className="p-description" data-aos="zoom-out">{currentProject.desc}</p>
                </div>
                <div id="project-gallery">
                    <h3 className="hide-on-desktop" data-aos="zoom-out">Gallery</h3>
                    {renderedImages}
                </div>
            </div>
            <button className="button go-back" onClick={closeMethod}><ArrowLeft /> Go back</button>
            <div id="end-divider"></div>
            <div id="modal-close" onClick={closeMethod} data-aos="fade-down" data-aos-delay="150"><X /></div>
        </div>

    )
}

export default ProjectModal