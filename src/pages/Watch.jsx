import "./Page.css"

import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import Wallpaper from "../assets/img/Wallpaper2.jpg"

export const Watch = () => {
    return (
        <>
            <Header />
            <img src={Wallpaper} alt="Wallpaper" />
            <div className="relativo">
                <h1>Aqui você vai assistir os melhores filmes.</h1>
            </div>
            <Footer />
        </>
    )
}