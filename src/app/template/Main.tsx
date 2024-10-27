import TextRotator from "../componentes/TextRotator";

import SectionOne from "./SectionOne";
import SectionWhoAre from "./SectionWhoAre";
import SectionContact from "./SectionContact";
import SectionServicesHome from "./SectionServicesHome";

export default function Main() {
    return (
        <main>
            <div className="py-8">
                <div>
                    <div>
                        <div className="hidden sm:flex justify-center">
                            <TextRotator />
                        </div>
                        <div className="flex justify-center sm:hidden">
                            <h1 className="text-center text-3xl uppercase py-12 lg:py-16">Universe Petshop</h1>
                        </div>
                    </div>
                    <SectionOne />
                    <SectionServicesHome />
                    <SectionWhoAre />
                    <SectionContact />
                </div>
            </div>
        </main>
    );
}