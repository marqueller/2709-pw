import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormUser } from "../components/FormUser"

import Wallpaper from "../assets/Wallpaper.jpg"

export const Home = () => {
    return (
        <div>
            <Header />
            <h1>Page Home</h1>
            <img src={Wallpaper} alt="Wallpaper" />
            <Footer />
            <FormUser />
        </div>
    )
}