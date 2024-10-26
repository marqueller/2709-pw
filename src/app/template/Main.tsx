import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import Dog from "../../../public/img/img-dog.png"
import SectionServices from "./SectionServices";
import SectionWhoAre from "./SectionWhoAre";

export default function Main() {
    return (
        <main>
            <div className="container mx-auto py-8">
                <div>
                    <h1 className="text-center text-3xl uppercase mt-10">Universe petshop</h1>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6 pt-20">
                            <div className="text-center lg:text-start">
                                <h2 className="text-3xl">Onde a felicidade dos pets começa!</h2>
                                <p className="pt-12 pb-16">No Universe Petshop, dedicamo-nos a oferecer o melhor para o seu melhor amigo. Desde ração de alta qualidade até acessórios incríveis, temos tudo que seu pet precisa para viver feliz e saudável. Venha nos visitar e descubra um mundo de amor e cuidados!</p>
                            </div>
                        </div>
                        {/* <div className="col-span-12 lg:col-span-6">
                            <Image
                                src={Dog}
                                alt="Img Dog"
                                width={500}
                            />
                        </div> */}
                    </div>
                    <SectionServices />
                    <SectionWhoAre />
                </div>
            </div>
        </main>
    );
}