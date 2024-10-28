'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";
import MenuMobile from "../componentes/MenuMobile";
import data from "@/message/data.json";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`transition-all ease-in-out duration-300 ${isScrolled ? 'menu-fixed' : 'bg-zinc-100 border-b-2 py-6'}`}>
            <nav>
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <Link href="/" rel="noreferrer">
                            <Image src={Logo} alt="Logo Petshop" className="logo" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex gap-6">
                        {data.InfoNavLink.map((info, index) => (
                            <Link key={index} href={info.href} className={`relative ${isScrolled ? 'text-[18px]' : 'text-[20px]'} 
                                ${pathname === info.href ? 'border-b-4 border-primary-color ' : 'border-b-2 border-transparent'} hover:border-b-4 hover:border-primary-color transition`}>
                                {info.name}
                            </Link>
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
