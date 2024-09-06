import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Wallpaper from "../assets/Wallpaper.jpg"

export const Assistir = () => {
    return (
        <div>
            <Header />
            <h1>Page Watch</h1>
            <img src={Wallpaper} alt="Wallpaper" />
            <Footer />
        </div>
    )
}