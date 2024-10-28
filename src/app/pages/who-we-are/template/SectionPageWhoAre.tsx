'use client'

import Image from "next/image"
import Dog from "../../../../../public/img/img-dog-sleep.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function SectionPageWhoAre() {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-12 py-16 lg:py-12">
                <div className="flex justify-center col-span-12 order-2 lg:order-1">
                    <Image
                        data-aos="flip-right"
                        data-aos-offset="200"
                        data-aos-duration="1500"
                        data-aos-easing="ease"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        src={Dog}
                        alt="Img Dog"
                        className="lg:w-2/5 h-auto pt-16 lg:pt-0"
                    />
                </div>
                <div className="col-span-12 text-center order-1 lg:order-2">
                    <div className="text-center text-black"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-duration="1500"
                        data-aos-easing="ease"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <h2 className="text-2xl lg:text-3xl font-bold">Quem somos!</h2>
                        <p className="pt-6 pb-8 lg:pt-12 lg:pb-16">Na Universe Petshop, acreditamos que cada animal é uma parte fundamental da família. Nossa missão é proporcionar o melhor em cuidados, produtos e serviços, sempre com o objetivo de garantir que seus pets tenham uma vida plena e feliz. Sabemos que cada animal tem suas próprias necessidades e características, e é por isso que oferecemos uma variedade de produtos de alta qualidade, desde alimentos nutritivos até acessórios que combinam conforto e estilo. Além disso, contamos com uma equipe apaixonada e altamente capacitada, pronta para oferecer orientações e cuidados personalizados para cada amigo de quatro patas.Na Universe Petshop, acreditamos que cada animal é parte da família. Nossa missão é proporcionar o melhor em cuidados, produtos e serviços, garantindo que seus pets tenham uma vida plena e feliz. Venha conhecer nosso compromisso com o bem-estar dos seus amigos de quatro patas!</p>
                        <p>Valorizamos o bem-estar dos animais e nos empenhamos em criar um ambiente acolhedor e seguro, onde os tutores possam encontrar tudo o que precisam para o cuidado e a felicidade de seus pets. Nossa loja também promove eventos e campanhas de conscientização sobre a adoção responsável e a importância do cuidado adequado, reafirmando nosso compromisso com a comunidade e com os animais em situação de vulnerabilidade. Venha nos visitar e descubra como podemos ajudar a melhorar a qualidade de vida dos seus queridos companheiros!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
