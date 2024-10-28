'use client'

import Image from "next/image";

import Dog from "../../../public/img/img-dog.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function SectionOne() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 pb-12">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="text-center lg:text-start lg:mt-[140px] xl:mt-[220px]" data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="350"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        >
                            <h2 className="text-2xl lg:text-3xl py-4 lg:py-0">Onde a felicidade dos pets começa!</h2>
                            <p className="pt-6 pb-8 lg:pt-12  lg:pb-16">No Universe Petshop, dedicamo-nos a oferecer o melhor para o seu melhor amigo. Desde ração de alta qualidade até acessórios incríveis, temos tudo que seu pet precisa para viver feliz e saudável. Venha nos visitar e descubra um mundo de amor e cuidados!</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 place-items-center lg:place-items-end lg:pt-20 xl:pt-4 lg:pb-12">
                        <Image
                            data-aos="flip-left"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            src={Dog}
                            alt="Img Dog"
                            className="w-auto h-auto lg:w-3/4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}