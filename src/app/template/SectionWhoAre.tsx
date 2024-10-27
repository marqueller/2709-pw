import Image from "next/image"
import Dog from "../../../public/img/img-dog-sleep.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SectionWhoAre() {
    return (
        <div className="bg-primary-400">
            <div className="container mx-auto grid grid-cols-12 py-16 lg:py-12">
                <div className="col-span-12 lg:col-span-6 place-items-center lg:place-items-start order-2 lg:order-1">
                    <Image
                        src={Dog}
                        alt="Img Dog"
                        className="w-auto h-auto lg:w-3/4"
                    />
                </div>
                <div className="col-span-12 lg:col-span-6 text-center place-content-center order-1 lg:order-2">
                    <div className="text-center lg:text-start text-white">
                        <h2 className="text-2xl lg:text-3xl font-bold">O Amor pelos Animais é a Nossa Missão!</h2>
                        <p className="pt-6 pb-8 lg:pt-12 lg:pb-16">Na Universe Petshop, acreditamos que cada animal é parte da família. Nossa missão é proporcionar o melhor em cuidados, produtos e serviços, garantindo que seus pets tenham uma vida plena e feliz. Venha conhecer nosso compromisso com o bem-estar dos seus amigos de quatro patas!</p>
                    </div>
                    <Link href="/pages/who-we-are">
                        <Button className="px-4 py-6 mb-20 lg:mb-0 bg-white text-primary-color" variant="default2">Quem somos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
