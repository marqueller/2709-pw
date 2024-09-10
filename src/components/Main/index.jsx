import "./Main.css"

import React from "react"
import Wallpaper from "../../assets/img/Wallpaper3.jpg"
import { FormUser } from "../FormUser"

export const Main = () => {
    return (
        <main>
            <img src={Wallpaper} alt="Wallpaper" />
            <div className="position-relative">
                <FormUser />
            </div>
        </main>
    )
}