// dependencies
import { Link } from "react-router-dom"
import { useEffect } from 'react';
// student data
import { webData } from '../data/webStudentData';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Students = () => {
    const renderedStudents = webData.map((student, index) => {
        return (
            <Link className="post-link" to={`/student/${student.slug}`} key={index} data-aos="zoom-out-down">
                <div className="student-container">
                    <img src={student.headshot} alt={student.name + " headshot"} />
                    <h4 className="name">{student.name}</h4>
                </div>
            </Link>
        )
    })
    return renderedStudents;
}

const WebUxStudents = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back'
        });
    }, [])
    return <Students />
}

export default WebUxStudents