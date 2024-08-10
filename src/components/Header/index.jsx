import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <span>CedupFlix</span>
                <nav>
                    <a href="/">Home</a>
                    <a href="/assistir">Assistir</a>
                    <a href="/acesso">Login</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;