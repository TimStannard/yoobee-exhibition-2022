// get data
import { animationData } from '../data/animationStudentData';
import { webData } from '../data/webStudentData';
import { filmData } from '../data/filmStudentData';

export const randomStudentLink = () => {

    // get all web students
    const webStudents = webData.map((student) => {
        student.faculty = "webUx";
        return student;
    })
    // get all animation students
    const animationStudents = animationData.map((student) => {
        student.faculty = "animation";
        return student;
    })
    // get all film tv students
    const filmStudents = filmData.map((student) => {
        student.faculty = "film";
        return student;
    })

    const allStudents = [...webStudents, ...animationStudents, ...filmStudents];

    // generate random number to choose a random student
    const randomUniqueNumber = Math.floor(Math.random() * allStudents.length - 1) + 1;
    // student 
    const randomlyChosenStudent = allStudents[randomUniqueNumber];
    return `${randomlyChosenStudent.faculty}/student/${randomlyChosenStudent.slug}`
}
