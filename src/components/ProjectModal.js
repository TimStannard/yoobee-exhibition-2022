import { X, ArrowLeft } from 'react-bootstrap-icons';

const ProjectModal = ({ currentProject, closeMethod, currentSlug }) => {

    const renderedImages = currentProject.images.map((image, index) => {
        return (
            <img data-aos="zoom-in" key={index} className="project-mockup-image" src={"/student-images/web-ux/projects/" + currentSlug + "/" + image} alt={currentProject.title + "mockup"} />
        )
    })

    return (
        <div id="modal">
            <h1 data-aos="zoom-out-down">{currentProject.title}</h1>
            <p data-aos="zoom-out">{currentProject.desc}</p>
            <div id="project-gallery">
                {renderedImages}
            </div>
            <button className="button go-back" onClick={closeMethod} data-aos="zoom-out-up"><ArrowLeft /> Go back</button>
            <div id="end-divider"></div>
            <div id="modal-close" onClick={closeMethod} data-aos="fade-down" data-aos-delay="150"><X /></div>
        </div>

    )
}

export default ProjectModal