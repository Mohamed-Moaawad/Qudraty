import './Footer.css';
import Image from 'next/image';
import Container from '../ui/Container';
import logo from '../../images/logo.png';
import qrCode from '../../images/QR Code.png';
import { FaFacebookF, FaInstagram, FaTiktok  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='py-32'>
            <Container>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-8">
                        <div className="logo-app">
                            <div className="logo">
                                <Image src={logo} alt='logo' />
                            </div>
                            <h5>ابنك يتعلّم... وانت تتابعه!</h5>
                            <div className="qr-code">
                                <h6>احصل على التطبيق</h6>
                                <Image src={qrCode} alt='Qr_Code' />
                                <span>امسح QR لتنزيل التطبيق</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-8">
                        <h4>روابط سريعة:</h4>
                        <ul>
                            <li><a href="#">الرئيسية</a></li>
                            <li><a href="#">مميزات التطبيق</a></li>
                            <li><a href="#">خطوات الاستخدام</a></li>
                            <li><a href="#">آراء المستخدمين</a></li>
                            <li><a href="#">حمل التطبيق</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-8">
                        <h4>تواصل معنا:</h4>
                        <a className='link' href="#">info@talebapp.com</a>
                        <a className='link' href="#">010-1234-5678</a>
                        <p>السعوديه ، جده </p>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-8">
                        <h4>تابعنا على منصات التواصل الاجتماعي </h4>
                        <div className="social-media">
                            <a className="icon" href='#' target='_blank'>
                                <FaFacebookF />
                            </a>
                            <a className="icon" href='#' target='_blank'>
                                <FaInstagram />
                            </a>
                            <a className="icon" href='#' target='_blank'>
                                <FaTiktok />
                            </a>
                            <a className="icon" href='#' target='_blank'>
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;