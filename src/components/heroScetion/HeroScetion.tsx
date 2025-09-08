'use client';
import './HeroSection.css';
import Image from 'next/image';
import Container from '../ui/Container';
import CustomButton from '../ui/customButton/CustomButton';
// React Icons
import { FaGooglePlay } from 'react-icons/fa';
import { BsApple } from "react-icons/bs";
// Images
import hero1 from '../../images/hero-1.png';
import hero2 from '../../images/hero-2.png';
import hero3 from '../../images/hero-3.png';
import hero4 from '../../images/hero-4.png';

import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <section className='hero'>
            <Container>
                <div className='flex-col justify-end'>
                    <div className="text">
                        <motion.h3
                            initial={{ translateY: 50, opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            transition={{ duration: 1,}}
                        >
                            ابنك يتعلم، وأنت مطمئن عليه في كل خطوة
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3}}>
                            منصّة تعليمية ذكية مدعومة بالذكاء الاصطناعي، تدمج الطالب وولي الأمر في رحلة تعليمية واحدة. تابع، راقب، وخلّي التعليم أوضح وأسهل من أي وقت فات!
                        </motion.p>
                        <div className="buttons flex gap-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <CustomButton
                                    text='تحميل الان'
                                    icon={<FaGooglePlay />}
                                    backgroundColor='var(--title-color)'
                                    color='#fff'
                                    url='#'
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, }}
                            >
                                <CustomButton
                                    text='تحميل الان'
                                    icon={<BsApple />}
                                    backgroundColor='var(--title-color)'
                                    color='#fff'
                                    url='#'
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ translateY: 150, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="images">
                            <Image src={hero4} alt='image' />
                            <Image src={hero2} alt='image' />
                            <Image src={hero3} alt='image' />
                            <Image src={hero1} alt='image' />
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default HeroSection;