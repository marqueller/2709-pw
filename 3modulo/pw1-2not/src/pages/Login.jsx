import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FormUser } from "../components/FormUser"

export const Login = () => {
    return (
        <div className='background3'>
            <Header />
            <h1>Page Login</h1>
            <FormUser />
            <Footer />
        </div>
    )
}