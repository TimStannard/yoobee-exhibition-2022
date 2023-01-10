export const Projects = ({ student, openModal, setProject }) => {

    // map through projects
    const mappedProjects = student.projects.map((project, index) => {
        return (
            <div className="project-item" key={index} onClick={() => {
                setProject(project);
                openModal();
            }}>
                <img data-aos="zoom-in" className="project-image" src={"/student-images/web-ux/projects/" + student.slug + "/" + project.images[0]} alt={project.title + "screenshot"} />
                <h4 data-aos="zoom-in">
                    {project.title}
                </h4>
            </div>
        )
    })

    return (
        <div className="project-container">
            {mappedProjects}
        </div>
    )
}