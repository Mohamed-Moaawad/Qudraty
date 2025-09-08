'use client'
import './Testimonials.css';
import Image from 'next/image';
import Container from '../ui/Container';
import TextTitle from '../ui/textTitle/TextTitle';

import userAvatar from '../../images/avatar.png'

import { Rating } from '@material-tailwind/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section id='testimonials' className='testimonials py-32'>
            <Container>
                <TextTitle
                    title='آراء العملاء'
                    description='التجربة مش بس تعليم... دي راحة بال لكل ولي أمر، وحماس لكل طالب. اسمع بنفسك من اللي جرّبوا التطبيق.'
                />
                <div className="slider-box">
                    <Swiper
                        // slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            // 768 px of screen
                            768: {
                                slidesPerView: 2,
                            },
                            // 991 px of screen
                            991: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="testimonial-card rounded-xl">
                                <Image src={userAvatar} alt='user' />
                                <div className="user-info flex flex-col items-center mb-5">
                                    <Rating value={4} readonly onResize={undefined} placeholder={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    <h4>محمود عبدالرحمن</h4>
                                    <span>ولي أمر طالب</span>
                                </div>
                                <p>كنت دايمًا بحس إني مش فاهم ابني ذاكر إيه ولا وصل لفين، لكن أول ما استخدمنا التطبيق، كل حاجة اتغيرت. بقيت أعرف كل خطوة بيعملها، وكل نتيجة بيحققها. أخيرًا، بقيت حاسس إني مشارك في مستقبله فعلًا، مش مجرد متفرّج</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card rounded-xl">
                                <Image src={userAvatar} alt='user' />
                                <div className="user-info flex flex-col items-center mb-5">
                                    <Rating value={4} readonly onResize={undefined} placeholder={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    <h4>محمود عبدالرحمن</h4>
                                    <span>ولي أمر طالب</span>
                                </div>
                                <p>كنت دايمًا بحس إني مش فاهم ابني ذاكر إيه ولا وصل لفين، لكن أول ما استخدمنا التطبيق، كل حاجة اتغيرت. بقيت أعرف كل خطوة بيعملها، وكل نتيجة بيحققها. أخيرًا، بقيت حاسس إني مشارك في مستقبله فعلًا، مش مجرد متفرّج</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card rounded-xl">
                                <Image src={userAvatar} alt='user' />
                                <div className="user-info flex flex-col items-center mb-5">
                                    <Rating value={4} readonly onResize={undefined} placeholder={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    <h4>محمود عبدالرحمن</h4>
                                    <span>ولي أمر طالب</span>
                                </div>
                                <p>كنت دايمًا بحس إني مش فاهم ابني ذاكر إيه ولا وصل لفين، لكن أول ما استخدمنا التطبيق، كل حاجة اتغيرت. بقيت أعرف كل خطوة بيعملها، وكل نتيجة بيحققها. أخيرًا، بقيت حاسس إني مشارك في مستقبله فعلًا، مش مجرد متفرّج</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-card rounded-xl">
                                <Image src={userAvatar} alt='user' />
                                <div className="user-info flex flex-col items-center mb-5">
                                    <Rating value={4} readonly onResize={undefined} placeholder={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                    <h4>محمود عبدالرحمن</h4>
                                    <span>ولي أمر طالب</span>
                                </div>
                                <p>كنت دايمًا بحس إني مش فاهم ابني ذاكر إيه ولا وصل لفين، لكن أول ما استخدمنا التطبيق، كل حاجة اتغيرت. بقيت أعرف كل خطوة بيعملها، وكل نتيجة بيحققها. أخيرًا، بقيت حاسس إني مشارك في مستقبله فعلًا، مش مجرد متفرّج</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;