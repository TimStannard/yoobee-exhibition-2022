// dependencies
import { Link } from "react-router-dom"
// student data
import { webData } from '../data/webStudentData';

const Students = () => {
    const mappedStudents = webData.map((student, index) => {
        return (
            <div className="student-container" key={index} data-aos="zoom-out-down">
                <Link className="post-link" to={`/webUx/student/${student.slug}`} >
                    <img src={student.headshot} alt={student.name + " headshot"} />
                    <h4 className="name">{student.name}</h4>
                </Link>
            </div>
        )
    })
    return mappedStudents;
}

const WebUxStudents = () => {
    return <Students />
}

export default WebUxStudents