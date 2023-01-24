// dependencies
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
// get data for spotlight students
import { animationData } from '../data/animationStudentData';
import { webData } from '../data/webStudentData';
import { filmData } from '../data/filmStudentData';
// swiper
import 'swiper/swiper.min.css';
// utilities
import { randomStudentLink } from '../util/randomStudentLink';
// images
import mysteryStudentImage from "../img/mystery-student.jpg";
// bootstrap icons
import { ArrowRight, EyeFill } from "react-bootstrap-icons"
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const RandomStudentSlides = () => {
    // get all web students
    const webStudents = webData.map((student) => {
        student.faculty = "webUx";
        student.faculty_pretty_print = "Web & Ux";
        return student;
    })
    // get all animation students
    const animationStudents = animationData.map((student) => {
        student.faculty = "animation";
        student.faculty_pretty_print = "Animation";
        return student;
    })
    // get all film students
    const filmStudents = filmData.map((student) => {
        student.faculty = "film";
        student.faculty_pretty_print = "Film & TV";
        return student;
    })

    const allStudents = [...webStudents, ...animationStudents, ...filmStudents];

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
    // // map to show random projects in a swiper slide
    const mappedRandomStudents = randomStudents.map((student, index) => {
        return (
            <SwiperSlide key={index}>
                <Link to={`/${student.faculty}/student/${student.slug}`}>
                    <img src={student.headshot} className="swiper-image" alt={student.name + "headshot photo"} />
                </Link>
            </SwiperSlide>
        )
    })

    const StudentDescriptions = ({ index }) => {
        let message = "";
        if (index <= 1) {
            message =
                <>
                    <div>
                        <p>{randomStudents[index].faculty_pretty_print}</p>
                    </div>
                    <h4>{randomStudents[index].name}</h4>
                    <Link to={`/${randomStudents[index].faculty}/student/${randomStudents[index].slug}`}>
                        <button className="button regular">View projects <EyeFill /></button>
                    </Link>
                </>;
        } else {
            message =
                <>
                    <h4>Pick a random student</h4>
                    <Link to={randomStudentLink()}>
                        <button className="button yellow">Go! <ArrowRight /></button>
                    </Link>
                </>;
        }
        return (
            <div id="student-spotlight-description">
                {message}
            </div>
        )
    }

    const SwiperSlides = () => {
        // store index to send down to the description
        const [curIndex, setCurIndex] = useState(0);

        return (
            <>
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
                        // get new index of swiper on change
                        setCurIndex(swiper.activeIndex);
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
                <StudentDescriptions index={curIndex} />
            </>
        )
    }
    return <SwiperSlides />;
}

const StudentSpotlight = () => {
    // init AOS
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back'
        });
    }, [])
    return (
        <div id="student-spotlight" data-aos="zoom-out">
            <RandomStudentSlides />
        </div>
    )
}

export default StudentSpotlight