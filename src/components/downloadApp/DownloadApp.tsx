import Image from 'next/image';
import Container from '../ui/Container';
import CustomButton from '../ui/customButton/CustomButton';
import './DownloadApp.css';
// React Icons
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

import apps from '../../images/app-3.png';

const DownloadApp = () => {
    return (
        <section className='download-app py-32'>
            <Container>
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-6/12 mb-5">
                        <div className="text">
                            <h3>حمّل التطبيق <br />
                                وابدأ الرحلة التعليمية!
                            </h3>
                            <p>تابع ابنك لحظة بلحظة، وخلي المذاكرة تجربة ممتعة وتفاعلية. التطبيق متاح الآن على جميع الأجهزة – اضغط وحمّل دلوقتي!</p>
                            <div className="buttons flex gap-5 mt-16">
                                <CustomButton
                                    text='Google Play'
                                    backgroundColor='var(--title-color)'
                                    color='#fff'
                                    icon={<FaGooglePlay />}
                                    url='#'
                                />
                                <CustomButton
                                    text='App Store'
                                    backgroundColor='var(--title-color)'
                                    color='#fff'
                                    icon={<GrAppleAppStore />}
                                    url='#'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 flex justify-center">
                        <div className="img">
                            <Image src={apps} alt='apps' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DownloadApp;