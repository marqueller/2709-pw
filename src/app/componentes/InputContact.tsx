interface InputContactProps {
    img: string | StaticImageData
    alt: string
    type: string
    placeholder: string
}

import { Input } from "@/components/ui/input"
import Image, { StaticImageData } from "next/image"

export default function InputContact(props: InputContactProps) {
    return (
        <div className="flex items-center justify-center gap-4 px-2 py-5 border-b-2 border-primary-color">
            <Image
                src={props.img}
                alt={props.alt}
                width={25}
                height={25}
            />
            <Input className="border-none shadow-transparent text-base" type={props.type} placeholder={props.placeholder} />
        </div>
    )

}
