// dependencies
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
// get data for spotlight students
import { animationData } from '../data/animationStudentData';
import { webData } from '../data/webStudentData';
// swiper
import 'swiper/swiper.min.css';
// utilities
import { randomStudentLink } from '../util/randomStudentLink';
// images
import mysteryStudentImage from "../img/mystery-student.jpg";
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const RandomStudentSlides = ({ studentsArray, index }) => {
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

    const allStudents = [...webStudents, ...animationStudents];

    const randomStudentIndexes = [];
    // generate random number to choose a random student
    for (let i = 0; i < 2; i++) {
        let randomUniqueNumber = Math.floor(Math.random() * allStudents.length - 1) + 1;
        // check if random number exists
        if (randomStudentIndexes.length > 0) {
            // run through random number array
            for (let i = 0; i < randomStudentIndexes.length; i++) {
                // check if current iteration of random number array is equal to new generated number
                if (randomUniqueNumber === randomStudentIndexes[i]) {
                    // if equal, regenerate random number
                    // note: check for double ups
                    // console.log("detected double up of " + randomUniqueNumber + " and " + randomStudentIndexes[i]);
                    randomUniqueNumber = Math.floor(Math.random() * allStudents.length - 1) + 1;
                    // reset loop
                    i = -1;
                };
            }
        }
        randomStudentIndexes.push(randomUniqueNumber);
    }

    // put random students into a new array based on looping through the random indexes
    const randomStudents = [];
    for (let i = 0; i < randomStudentIndexes.length; i++) {
        randomStudents.push(allStudents[randomStudentIndexes[i]]);
    }
    // update home component with our students
    studentsArray(randomStudents);
    // // map to show random projects in a swiper slide
    const mappedRandomStudents = randomStudents.map((student, index) => {
        return (
            <SwiperSlide key={index}>
                <Link to={`/${student.faculty}/student/${student.slug}`}>
                    <img src={student.headshot} className="swiper-image" alt={student.name + "headshot photo"} />
                </Link>
                {/* <div className="desktop-spotlight-info">
                    <h3>{student.name}</h3>
                    <h4>{student.faculty}</h4>
                </div> */}
            </SwiperSlide>
        )
    })

    const SwiperSlides = () => {
        return (
            <Swiper
                id="swiper-featured"
                effect={"cards"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"2"}
                modules={[EffectCards]}
                spaceBetween={0}
                initialSlide={0}
                cardsEffect={{
                    perSlideOffset: 10,
                    perSlideRotate: 3
                }}
                onSlideChange={(swiper) => {
                    // get new index of swiper on change, send back to home component
                    index(swiper.activeIndex);
                }}

            >
                {mappedRandomStudents}
                <SwiperSlide key={2}>
                    <div id="choose-random-student-slide">
                        <Link to={randomStudentLink()}>
                            <img src={mysteryStudentImage} className="swiper-image" alt={"question mark"} />
                            <div id="mystery-tagline" className="bouncing-text">
                                <div className="s">S</div>
                                <div className="u">u</div>
                                <div className="r">r</div>
                                <div className="p">p</div>
                                <div className="r2">r</div>
                                <div className="i">i</div>
                                <div className="s2">s</div>
                                <div className="e">e</div>
                                <div>&nbsp;</div>
                                <div className="m">m</div>
                                <div className="e2">e</div>
                                <div className="mark">!</div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>

        )
    }
    return <SwiperSlides />;
}

const StudentSpotlight = ({ students, currentIndex }) => {
    // set the current index to 0 by default
    currentIndex(0);
    // init AOS
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back'
        });
    }, [])
    return (
        <div id="student-spotlight" data-aos="zoom-out">
            <RandomStudentSlides studentsArray={students} index={currentIndex} />
        </div>
    )
}

export default StudentSpotlight