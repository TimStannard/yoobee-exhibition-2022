// dependencies
import { Link } from "react-router-dom"
// student data
import { filmData } from '../data/filmStudentData';

const Students = () => {
    const mappedStudents = filmData.map((student, index) => {
        return (
            <Link className="post-link" to={`/film/student/${student.slug}`} key={index} data-aos="zoom-out-down" data-aos-anchor-placement="top">
                <div className="student-container">
                    <h4 className="name film-student">{student.name}</h4>
                </div>
            </Link>
        )
    })
    return mappedStudents;
}

const FilmStudents = () => {
    return <Students />
}

export default FilmStudents