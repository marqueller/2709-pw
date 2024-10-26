import Image, { StaticImageData } from "next/image"

interface InfoServicesProps {
    title: string
    img: string | StaticImageData
    alt: string
    caption?: string
    className?: string
    styleText?: string
}

export default function InfoServices(props: InfoServicesProps) {
    return (
        <div className={`flex flex-col items-center justify-center py-12 border-2 min-h-[260px] min-w-[460px] rounded-3xl bg-zinc-200 text-xl font-semibold ${props.className}`}>
            <h2 className={`text-primary-color ${props.styleText}`}>
                {props.title}
            </h2>
            <Image
                src={props.img}
                alt={props.alt}
                width={165}
                height={165}
            />
            <p className="text-base text-white font-medium">{props.caption}</p>
        </div>
    )
}
