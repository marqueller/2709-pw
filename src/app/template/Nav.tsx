'use client'
import { useEffect, useState } from 'react';

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/img/logo.png";
import NavLink from "../componentes/NavLink";
import MenuMobile from "../componentes/MenuMobile";

import data from "@/message/data.json";

const Header = () => {
    // const [isFixed, setIsFixed] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 15) {
    //             setIsFixed(true);
    //         } else {
    //             setIsFixed(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        // isFixed ? 'menu-fixed' : 'bg-white transition-all duration-1000 ease-in-out py-8 border-b
        <header className="">
            <nav>
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <Link href="/" rel="noreferrer">
                            <Image
                                src={Logo}
                                alt="Logo Petshop"
                                className="w-[150px] lg:w-[180px] lg:h-[70px] logo"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex gap-6 duration-300">
                        {data.InfoNavLink.map((info, index) => (
                            <NavLink
                                key={index}
                                href={info.href}
                                name={info.name}
                            />
                        ))}
                    </div>
                    <div className="flex lg:hidden">
                        <MenuMobile />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
