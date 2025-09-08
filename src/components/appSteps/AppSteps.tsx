import './AppSteps.css';
import Container from '../ui/Container';
import TextTitle from '../ui/textTitle/TextTitle';
import { FaUserCheck } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";


const AppSteps = () => {
    return (
        <section id='app-steps' className='app-steps py-[60px]'>
            <Container>
                <TextTitle title=' خطوات استخدام التطبيق' />
                <div className="box-container w-full rounded-lg shadow-lg backdrop-blur-md">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-6/12 lg:w-4/12 px-5 mb-8">
                            <div className="step-card flex flex-col items-center">
                                <div className="icon icon-1 rounded-xl">
                                    <FaUserCheck />
                                </div>
                                <h5>إنشاء الحساب وتفعيل الطالب</h5>
                                <p>يسجل ولي الأمر حسابه، وبيربط حساب ابنه، علشان يقدر يفعل له الدخول للمحتوى.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-5 mb-8">
                            <div className="step-card flex flex-col items-center">
                                <div className="icon icon-2 rounded-xl">
                                    <FaBrain />
                                </div>
                                <h5> تحديد المستوى والبدء بالتعلّم</h5>
                                <p>الطالب بيبدأ باختبار تحديد مستوى، وبعده يفتح أول مادة تجريبية، ويبدأ يتفاعل مع الفيديوهات والاختبارات.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-5 mb-8">
                            <div className="step-card flex flex-col items-center">
                                <div className="icon icon-3 rounded-xl">
                                    <FaChartSimple />
                                </div>
                                <h5> المتابعة والتقارير اللحظية</h5>
                                <p>ولي الأمر بيتابع أداء ابنه، يوصله تقارير تفصيلية، ويقدر يرسل تنبيهات ذكية في أي وقت.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AppSteps;