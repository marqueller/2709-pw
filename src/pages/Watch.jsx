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
            <Footer />
        </>
    )
}