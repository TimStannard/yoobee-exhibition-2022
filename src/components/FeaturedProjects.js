import { useEffect } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/swiper.min.css';
// AOS animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedProjects = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out-back'
        });
    }, [])
    return (
        <div id="featured-projects" data-aos="zoom-out">
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
                <SwiperSlide><img src="https://via.placeholder.com/150" /></SwiperSlide>
                <SwiperSlide><img src="https://via.placeholder.com/150" /></SwiperSlide>
                <SwiperSlide><img src="https://via.placeholder.com/150" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FeaturedProjects