'use client'
import './AppSlider.css';
import Image from 'next/image';
import Container from '../ui/Container';
import mobile from '../../images/iphone-frame.png';

import screen_1 from '../../images/screen-1.png';
import screen_2 from '../../images/screen-2.png';
import screen_3 from '../../images/screen-3.png';
import screen_4 from '../../images/screen-4.png';
import screen_5 from '../../images/screen-5.png';
import screen_6 from '../../images/screen-6.png';
import screen_7 from '../../images/screen-7.png';
import screen_8 from '../../images/screen-8.png';
import screen_9 from '../../images/screen-9.png';
import screen_10 from '../../images/screen-10.png';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import TextTitle from '../ui/textTitle/TextTitle';

const AppSlider = () => {
    return (
        <section className='app-slider'>
            <Container>
                <TextTitle title='صفحات التطبيق' description='ألقِ نظرة على أهم الصفحات التي تجعل تجربتك أكثر فاعلية.' />
                <div className="content">
                    <Image src={mobile} alt='mobile' />
                    <Swiper
                        centeredSlides={true}
                        slidesPerView={4}
                        initialSlide={0}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={screen_1} alt='phone-1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_2} alt='phone-2' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_3} alt='phone-3' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_4} alt='phone-4' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_5} alt='phone-5' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_6} alt='phone-6' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_7} alt='phone-7' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_8} alt='phone-8' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_9} alt='phone-9' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={screen_10} alt='phone-10' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default AppSlider;