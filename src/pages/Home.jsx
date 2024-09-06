import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormUser } from "../components/FormUser"
import './Home.css'

export const Home = () => {
    return (
        <div className="background2">
            <Header />
            <h1>Page Home</h1>
            <Footer />
            <FormUser />
        </div>
    )
}