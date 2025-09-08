'use client'
import './UsageExperience.css'
import Image from 'next/image';
import Container from '../ui/Container';
import TextTitle from '../ui/textTitle/TextTitle';
// React Icons
import { FaUserCheck } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { FaVideo } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { IoNotifications } from "react-icons/io5";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
// Images
import app1 from '../../images/app-1.png';
import app2 from '../../images/app-2.png';

import { motion } from "motion/react";

const UsageExperience = () => {
    return (
        <section id='usage-experience' className='usage-experience py-[30px]'>
            <Container>
                <TextTitle
                    title='تجربة الاستخدام'
                />
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-6/12 mb-10">
                        <div className="text">
                            <h4> تجربة الطالب داخل التطبيق</h4>
                            <p>من أول تسجيله لحد ما يتعلم ويتكافئ – كل خطوة محسوبة!</p>
                            <ul className='mt-8'>
                                <li>
                                    <div className="icon">
                                        <FaUserCheck />
                                    </div>
                                    <div className="text">
                                        <h6>ربط الحساب بولي الأمر</h6>
                                        <p>الطالب ما يقدرش يدخل على المحتوى قبل ما ولي الأمر يسجل ويوافق، وده بيحافظ على الخصوصية والتواصل بين الطرفين.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <GoChecklist />
                                    </div>
                                    <div className="text">
                                        <h6>امتحان تحديد المستوى</h6>
                                        <p>أول ما يسجل الطالب، بيبدأ باختبار تحديد مستوى يساعد التطبيق في تقديم المحتوى المناسب لقدراته.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FaVideo />
                                    </div>
                                    <div className="text">
                                        <h6>محتوى تفاعلي واختبارات داخل الفيديو</h6>
                                        <p>المناهج مش مجرد فيديوهات، كل فيديو فيه أسئلة سريعة لازم يجاوب عليها، وبعده امتحان شامل على الدرس.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FaAward />
                                    </div>
                                    <div className="text">
                                        <h6>نقاط ومكافآت تحفيزية</h6>
                                        <p>كل مهمة بيكملها الطالب، سواء مذاكرة أو حل امتحان، بياخد نقاط بتتجمع وتفتحله مزايا أكتر في التطبيق.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 flex justify-center items-center mb-10">
                        <div className="img">
                            <motion.div
                                initial={{ translateY: 150, opacity: 0.5 }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Image src={app1} alt='app_1' loading='lazy' />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-wrap items-center mt-32 flex-col-reverse">
                    <div className="w-full lg:w-6/12 flex justify-center items-center mb-10">
                        <div className="img img-2">
                            <motion.div
                                initial={{ translateY: 150, opacity: 0.5 }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Image src={app2} alt='app_2' loading='lazy' />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 mb-10">
                        <div className="text">
                            <h4>رحلة ولي الأمر في متابعة الابن</h4>
                            <p>كل أداة في إيدك علشان تتابع، توجه، وتطمن إن ابنك ماشي صح.</p>
                            <ul className='mt-8'>
                                <li>
                                    <div className="icon">
                                        <SiGoogleanalytics />
                                    </div>
                                    <div className="text">
                                        <h6>متابعة أداء الابن بدقة</h6>
                                        <p>شوف آخر تسجيل دخول، نتائج الامتحانات، والمحتوى اللي خلّصه ابنك لحظة بلحظة.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <IoNotifications />
                                    </div>
                                    <div className="text">
                                        <h6>إرسال تنبيهات مباشرة للطالب</h6>
                                        <p>لو ابنك مأجل المذاكرة، تقدر تبعت له إشعار ذكي يذكّره يراجع دروسه فورًا.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FaSheetPlastic />
                                    </div>
                                    <div className="text">
                                        <h6>عرض تقارير تفصيلية</h6>
                                        <p>استلم تقارير عن التقدّم، الحضور، التفاعل، والاختبارات بشكل منظم وسهل.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <BsFillCalendarDateFill />
                                    </div>
                                    <div className="text">
                                        <h6>متابعة الجدول والمناهج  المفتوحة</h6>
                                        <p>اعرف كل مادة متاحة لابنك وهل بدأ فيها ولا لأ، مع التحكم في وقت المذاكرة.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UsageExperience;