// dependencies
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    for (let i = 0; i < 3; i++) {
        let randomUniqueNumber = Math.floor(Math.random() * allStudents.length - 1) + 1;
        // check if random number exists
        if (randomStudentIndexes.length > 0) {
            // run through random number array
            for (let i = 0; i < randomStudentIndexes.length; i++) {
                // check if current iteration of random number array is equal to new generated number
                if (randomUniqueNumber == randomStudentIndexes[i]) {
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

    const SwiperSlides = () => {
        // setup state to store window size
        const [windowSize, setWindowSize] = useState(getWindowSize());
        // listen for window size change
        useEffect(() => {
            function handleWindowResize() {
                setWindowSize(getWindowSize());
            }

            window.addEventListener('resize', handleWindowResize);

            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, []);

        function getWindowSize() {
            const { innerWidth, innerHeight } = window;
            return { innerWidth, innerHeight };
        }

        return (
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
                {mappedRandomStudents}
            </Swiper>

        )
    }
    return <SwiperSlides />;
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
            <RandomStudentSlides />
        </div>
    )
}

export default StudentSpotlight