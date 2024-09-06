import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Wallpaper from "../assets/Wallpaper.jpg"

export const Login = () => {
    return (
        <div>
            <Header />
            <h1>Page Login</h1>
            <img src={Wallpaper} alt="Wallpaper" />
            <Footer />
        </div>
    )
}