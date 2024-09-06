import Wallpaper from "../../assets/Wallpaper.jpg"
import styles from "./Main.module.css";

export const Main = () => {
    return (
        <div className={styles.img}>
            <img src={Wallpaper} alt="Wallpaper" />
        </div>
    )
}