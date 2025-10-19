'use client'
import './Header.css';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../images/logo.png';
import CustomButton from '../ui/customButton/CustomButton';
// React Icons
import { ImWhatsapp } from "react-icons/im";
import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [navState, setNavState] = useState<boolean>(false);
    return (
        <header className="w-full fixed top-0 left-0 py-5 lg:px-32 z-50 md:px-24 px-10 shadow-sm backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-2/12">
                    <div className="logo flex justify-start items-center">
                        <Image src={logo} alt='Logo' />
                    </div>
                </div>
                <div className="w-4/12 lg:w-7/12 flex justify-center">
                    <nav style={{ top: navState ? '0' : '-1000%' }}>
                        <div className="close-icon flex lg:hidden"
                            onClick={() => setNavState(false)}
                        >
                            <TfiClose />
                        </div>
                        <ul>
                            <li>
                                <a href="/#">الرئيسية</a>
                            </li>
                            <li>
                                <a href="#features">المميزات</a>
                            </li>
                            <li>
                                <a href="#usage-experience">تجربه الاستخدام</a>
                            </li>
                            <li>
                                <a href="#app-steps">كيف يعمل</a>
                            </li>
                            <li>
                                <a href="#testimonials">آراء العملاء</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="w-4/12 lg:w-3/12 flex items-center justify-between lg:justify-end">
                    <div className="open-icon flex lg:hidden"
                        onClick={() => setNavState(true)}
                    >
                        <RxHamburgerMenu />
                    </div>
                    <div className="">
                        <CustomButton
                            text='تواصل معنا'
                            icon={<ImWhatsapp />}
                            backgroundColor='#24cc63'
                            color='#fff'
                            url='#'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
