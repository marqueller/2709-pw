import SectionAddress from "./template/SectionAddress";
import SectionContact from "@/app/template/SectionContact";

export default function Contact() {
    return (
        <main className="flex-grow">
            <SectionAddress />
            <SectionContact />
        </main>
    )
}
