'use client';
import './Features.css';
import Image from 'next/image';
import Container from '../ui/Container';
import TextTitle from '../ui/textTitle/TextTitle';
import feature_1 from '../../images/idea_icon.png';
import feature_2 from '../../images/happy_con.png';
import feature_3 from '../../images/guarantee_icon 1.png';
import feature_4 from '../../images/cil_book.png';
import FeatureCard from './FeatureCard';

import { motion } from "motion/react"

const Features = () => {
    return (
        <section id='features' className='features py-32'>
            <Container>
                <TextTitle
                    title='المميزات'
                    description='نظام تعليمي ذكي بيجمع بين المتابعة الدقيقة للطالب، وسهولة التواصل لولي الأمر، في تجربة عربية متكاملة'
                />
                <div className="feature-cards flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 p-5">
                        <motion.div
                            initial={{ translateY: 50 }}
                            whileInView={{ translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FeatureCard
                                icon={<Image src={feature_1} alt='idea_icon' />}
                                iconColor="#ED4883"
                                title='محتوى تفاعلي لكل طالب'
                                description='نقدّم دروس وأنشطة مخصصة لكل مرحلة دراسية، بتنسيق بسيط وسهل على الطالب.'
                            />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 p-5">
                        <motion.div
                            initial={{ translateY: 80 }}
                            whileInView={{ translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FeatureCard
                                icon={<Image src={feature_2} alt='happy_con' />}
                                iconColor="#EC732F"
                                title='حسابات مستقلة لكل دور'
                                description='الطالب وولي الأمر ليهم صفحات مستقلة، بتجربة مختلفة حسب كل دور.'
                            />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 p-5">
                        <motion.div
                            initial={{ translateY: 110 }}
                            whileInView={{ translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FeatureCard
                                icon={<Image src={feature_3} alt='guarantee_icon' />}
                                iconColor="#417CD4"
                                title='متابعة وتقارير فورية'
                                description='يقدر ولي الأمر يتابع تقدم ابنه في الدراسة، الحضور، والمهام أول بأول.'
                            />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 p-5">
                        <motion.div
                            initial={{ translateY: 140 }}
                            whileInView={{ translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FeatureCard
                                icon={<Image src={feature_4} alt='book_icon' />}
                                iconColor="#9747FF"
                                title='مناهج تفاعلية'
                                description='دروس وأنشطة مصممة بطريقة محفزة تساعد الطالب على الفهم، التفاعل، وتثبيت المعلومة بسهولة.'
                            />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;