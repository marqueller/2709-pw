import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <h2>CedupFlix &copy; Desenvolvido por Gabriel Anacleto 2024</h2>
            </footer>
        </div>
    );
}

export default Footer;