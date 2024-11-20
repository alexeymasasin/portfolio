import Button from "../ui/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.item}>
                <h2>Alexey Masasin</h2>
            </div>
            <nav className={styles.item}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>Home</li>
                    <li className={styles.nav_item}>About</li>
                    <li className={styles.nav_item}>Projects</li>
                    <li className={styles.nav_item}>Resume</li>
                </ul>
                <Button weight="bold" uppercase={true}>
                    Contact
                </Button>
            </nav>
        </header>
    );
}
