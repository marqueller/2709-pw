import Image from "next/image";

import Dog from "../../../public/img/img-dog.png"

export default function SectionMission() {
    return (
        <div>
            <div className="grid grid-cols-12 pb-12">
                <div className="col-span-12 lg:col-span-6">
                    <div className="text-center lg:text-start lg:mt-[220px]">
                        <h2 className="text-2xl lg:text-3xl">Onde a felicidade dos pets começa!</h2>
                        <p className="pt-6 pb-8 lg:pt-12  lg:pb-16">No Universe Petshop, dedicamo-nos a oferecer o melhor para o seu melhor amigo. Desde ração de alta qualidade até acessórios incríveis, temos tudo que seu pet precisa para viver feliz e saudável. Venha nos visitar e descubra um mundo de amor e cuidados!</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 place-items-center lg:place-items-end lg:pt-4 lg:pb-12">
                    <Image
                        src={Dog}
                        alt="Img Dog"
                        className="w-auto h-auto lg:w-3/4 "
                    />
                </div>
            </div>
        </div>
    );
}