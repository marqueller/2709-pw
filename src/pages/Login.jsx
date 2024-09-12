import "./Page.css"

import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Wallpaper from "../assets/img/Wallpaper1.jpg"

export const Login = () => {
    return (
        <>
            <Header />
            <img src={Wallpaper} alt="Wallpaper" />
            <div className="relativo">
                <h1>Aqui voce vai fazer o login</h1>
            </div>
            <Footer />
        </>
    )
}