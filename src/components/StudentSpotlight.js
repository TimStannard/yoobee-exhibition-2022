import { useEffect } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
// get data for featured student
import { animationData } from '../data/animationStudentData';
import { webData } from '../data/webStudentData';
// swiper
import 'swiper/swiper.min.css';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const RandomStudentSlides = () => {

    // get all web students
    const webStudents = webData.map((student) => {
        return student;
    })
    const animationStudents = animationData.map((student) => {
        return student;
    })

    const allStudents = [...webStudents, ...animationStudents];

    console.log(allStudents);
    // // get projects from each web student
    // const webProjectArrays = webData.map((student) => {
    //     return student.projects;
    // })
    // // combine the arrays of projects into one
    // const allWebProjects = Object.values(webProjectArrays).flat();
    // const randomProjectIndexes = [];
    // // generate random number to choose a random project
    // for (let i = 0; i < 3; i++) {
    //     let randomUniqueNumber = Math.floor(Math.random() * allWebProjects.length - 1) + 1;
    //     // check if random number exists
    //     if (randomProjectIndexes.length > 0) {
    //         // run through random number array
    //         for (let i = 0; i < randomProjectIndexes.length; i++) {
    //             // check if current iteration of random number array is equal to new generated number
    //             if (randomUniqueNumber == randomProjectIndexes[i]) {
    //                 // if equal, regenerate random number
    //                 // console.log("detected double up of " + randomUniqueNumber + " and " + randomProjectIndexes[i]);
    //                 randomUniqueNumber = Math.floor(Math.random() * allWebProjects.length - 1) + 1;
    //             };
    //         }
    //     }
    //     randomProjectIndexes.push(randomUniqueNumber);
    // }
    // // put random projects into a new array based on looping through the random indexes
    // const randomProjects = [];
    // for (let i = 0; i < randomProjectIndexes.length; i++) {
    //     randomProjects.push(allWebProjects[randomProjectIndexes[i]]);
    // }

    // // console.log(randomProjects);
    // // map to show random projects in a swiper slide
    // const mappedRandomProjects = randomProjects.map((project, index) => {
    //     return <SwiperSlide key={index}><img src={project.images[0]} /></SwiperSlide>
    //     // {"/student-images/web-ux/projects/" + student.slug + "/" + project.images[0]} alt={project.title + "screenshot"}
    // })
    // return mappedRandomStudents;
}

const StudentSpotlight = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back'
        });
    }, [])
    // randomiseProjects();
    return (
        <div id="student-spotlight" data-aos="zoom-out">
            <Swiper
                id="swiper-featured"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"2"}
                modules={[EffectCoverflow]}
                spaceBetween={0}
                initialSlide={1}
                // navigation
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1.1,
                    slideShadows: true,
                }}
            >
                <RandomStudentSlides />
            </Swiper>
        </div>
    )
}

export default StudentSpotlight