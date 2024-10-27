'use client'

import InfoServices from "../componentes/InfoServices";
import data from "../../message/data.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function SectionServicesHome() {
    return (
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center pb-10">
                {data.InfoSectionServices.slice(0, 3).map((info, index) => (
                    <div 
                        key={index}
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay={index * 350} 
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center"
                    >
                        <InfoServices
                            title={info.title}
                            img={info.img}
                            alt={info.alt}
                            caption={info.caption}
                            index={info.index}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Link href="/pages/services">
                    <Button className="px-5 py-6" variant="default2">Ver serviços</Button>
                </Link>
            </div>
        </div>
    )
}
