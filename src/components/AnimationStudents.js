// dependencies
import { Link } from "react-router-dom"
// student data
import { animationData } from '../data/animationStudentData';

const Students = () => {
    const mappedStudents = animationData.map((student, index) => {
        return (
            <Link className="post-link" to={`/animation/student/${student.slug}`} key={index} data-aos="zoom-out-down">
                <div className="student-container">
                    <img src={student.headshot} alt={student.name + " headshot"} />
                    <h4 className="name">{student.name}</h4>
                </div>
            </Link>
        )
    })
    return mappedStudents;
}

const AnimationStudents = () => {
    return <Students />
}

export default AnimationStudents