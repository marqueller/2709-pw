'use client'

import Image from "next/image";
import LineGreen from "../../../../../public/img/img-line-green.svg"
import Teste from "../../../../../public/icon/icon-facebook-green.png"
import Link from "next/link";

import data from "@/message/data.json"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function SectionAddress() {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-12 py-16">
                <div className="col-span-12 lg:col-span-6 order-2 lg:order-1"
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13695576.287375513!2d126.5470941683117!3d33.06577085373538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2zSmFww6Nv!5e0!3m2!1spt-BR!2sbr!4v1729998570137!5m2!1spt-BR!2sbr"
                        className="w-full pt-12 lg:pt-0"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="lg:col-start-8 col-span-12 lg:col-span-5 order-1 lg:order-2"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="800"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <h1 className="text-4xl lg:text-5xl font-medium">Entre em contato <br /> com a gente</h1>
                    <Image
                        src={LineGreen}
                        alt="Line Green"
                        className="pt-4 pb-12 md:w-80"
                    />
                    <div>
                        <Link href="https://github.com/TioAlisson/Projeto-Cedup.github.io" className="flex items-center gap-4">
                            <Image
                                src={Teste}
                                alt="Line Green"
                                width={40}
                            />
                            <span className="text-lg lg:text-2xl">(49) 9 9961-6212</span>
                        </Link>
                        <Link href="https://github.com/TioAlisson/Projeto-Cedup.github.io" className="flex items-center gap-4 py-10">
                            <Image
                                src={Teste}
                                alt="Line Green"
                                width={40}
                            />
                            <span className="text-lg lg:text-2xl w-[400px]">Avenida Castelo Branco, N 109 Universitario Lages - SC</span>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <span className="text-zinc-700 font-semibold text-2xl">Nossas redes:</span>
                            <div className="flex items-center gap-4 py-4">
                                {data.InfoSectionContactMap.map((link, index) => (
                                    <Link key={index} href={link.href} target="_blank" rel="noreferrer">
                                        <Image
                                            src={link.src}
                                            alt={link.alt}
                                            width={link.width}
                                            height={link.height}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}