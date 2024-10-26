import InfoServices from "../componentes/InfoServices";

import data from "../../message/data.json"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SectionServices() {
    return (
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 place-items-center py-12">
            {data.InfoSectionServices.map((info, index) => (
                <InfoServices
                    key={index}
                    title={info.title}
                    img={info.img}
                    alt={info.alt}
                    caption={info.caption}
                    className={index === 1 ? "!bg-primary-color" : ""}
                    styleText={index === 1 ? "!text-white" : ""}
                />
            ))}
            <Link href="/pages/services">
                <Button className="px-5 py-6" variant="default2">Ver serviços</Button>
            </Link>
        </div>
    )
}
