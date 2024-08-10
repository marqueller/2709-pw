import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <span>CedupFlix</span>
            <nav>
                <a href="/home">Home</a>
                <a href="/assistir">Assistir</a>
                <a href="/login">Login</a>
            </nav>
        </header>
    )
}
