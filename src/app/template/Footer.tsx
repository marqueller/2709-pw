import Image from "next/image";
import Link from "next/link";

import data from "@/message/data.json"
import Logo from "../../../public/img/logo.png"

export default function Footer() {
    return (
        <footer className="text-center">
            <div className="bg-primary-color text-white text-xl lg:text-2xl py-16">
                <div className="container mx-auto lg:w-2/4">
                <p>Conecte-se com a <span className="font-semibold">Universe Petshop</span> nas redes sociais e descubra um universo de novidades, iniciativas apaixonantes e tudo o que fazemos para celebrar o amor pelos pets!</p>
                    <div className="flex justify-center gap-4 pt-8 pb-12">
                        {data.InfoFooter.map((icon, index) => (
                            <Link key={index} href={icon.href} target="_blank" rel="noreferrer" className="border-2 rounded-lg p-2">
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={icon.width}
                                    height={icon.height}
                                    className="w-8 h-auto"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <hr className="max-w-[700px] mx-auto py-6" />
                <div className="flex justify-center">
                    <Link href="/" target="_blank" rel="noreferrer">
                        <Image
                            src={Logo}
                            alt="Icon Instagram"
                            className="w-auto h-auto"
                        />
                    </Link>
                </div>
            </div>
            <div className="bg-white py-6">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                    <p>Copyright 2024 Todos os direitos reservados.</p>
                    <p> Desenvolvido por Alisson Assis</p>
                </div>
            </div>
        </footer>
    );
}