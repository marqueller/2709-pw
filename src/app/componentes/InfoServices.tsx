import Image, { StaticImageData } from "next/image"

interface InfoServicesProps {
    title: string
    img: string | StaticImageData
    alt: string
    caption?: string
    className?: string
    styleText?: string
    index: number 
}

export default function InfoServices(props: InfoServicesProps) {
    const bgColor = props.index % 2 === 0 ? '!bg-primary-color text-white' : '!text-primary-color font-semibold';
    return (
        <div className={`flex flex-col place-items-center py-12 border-2 rounded-3xl bg-zinc-200 text-xl font-semibold w-full ${bgColor}`}>
            <h2>
                {props.title}
            </h2>
            <Image
                src={props.img}
                alt={props.alt}
                width={165}
                height={165}
            />
            <p className={`text-base text-white font-medium min-h-12 text-center ${bgColor}`}>{props.caption}</p>
        </div>
    )
}
