

import data from "@/message/data.json"
import InfoServices from "@/app/componentes/InfoServices";

export default function SectionServices() {
    return (
        <div className="container mx-auto py-20"> 
            <h2 className="text-center text-5xl uppercase">Nossos serviços</h2>
            <h3 className="text-2xl text-center lg:w-2/3 mx-auto lg:pt-20 py-10">Descubra como nossos serviços de castração, banho e tosa, além de uma seleção de produtos de qualidade, garantem o bem-estar e a felicidade do seu pet.</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center pb-10">
                {data.InfoSectionServices.map((info, index) => (
                    <InfoServices
                        key={index}
                        title={info.title}
                        img={info.img}
                        alt={info.alt}
                        caption={info.caption}
                        index={info.index}
                    />
                ))}
            </div>
        </div>
    )
}
