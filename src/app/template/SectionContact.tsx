'use client'

import data from "@/message/data.json"

import Link from "next/link";
import Image from "next/image";
import IconTextArea from "../../../public/icon/icon-account.png"

import InputContact from "../componentes/InputContact";
import { Button } from "@/components/ui/button";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function SectionContact() {
    return (
        <div>
            <div className="container mx-auto py-16 max-w-[720px]">
                <h2 className="text-3xl lg:text-5xl uppercase text-zinc-900 font-semibold text-center">Entre em contanto</h2>
                <p className="text-center pt-4 pb-8">Precisa de ajuda? Quer saber algo a mais? Preencha o formulário e nos envie uma mensagem. Entraremos em contato em breve!</p>
                <div>
                    {data.InfoSectionContact.map((info, index) => (
                        <div key={index} data-aos="zoom-in-down"
                            data-aos-offset="200"
                            data-aos-delay="350"
                            data-aos-duration={index * 500}
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="bottom">
                            <InputContact
                                key={index}
                                img={info.src}
                                alt={info.alt}
                                type={info.type}
                                placeholder={info.placeholder}
                            />
                        </div>
                    ))}
                    <div className="flex items-center justify-center py-8 gap-4 px-2 border-b-2 border-primary-color"
                        data-aos="zoom-in-down"
                        data-aos-offset="200"
                        data-aos-delay="350"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom"
                    >
                        <Image
                            src={IconTextArea}
                            alt="Icon Text Area"
                            width={25}
                            height={25}
                        />
                        <textarea rows={1} className="px-4 py-2 w-full" placeholder="Sua mensagem aqui" />
                    </div>
                    <div className="text-center">
                        <Link href="/">
                            <Button className="py-6 my-8 w-1/2" variant="default2">Enviar</Button>
                        </Link>
                    </div>
                    <hr className="mt-8" />
                </div>
            </div>
        </div>
    );
}