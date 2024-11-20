import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <Link to="/">
                <div className={styles.item}>
                    <img
                        src="https://avatars.githubusercontent.com/u/101698179?v=4"
                        alt="img"
                    />
                    <h2>Alexey Masasin</h2>
                </div>
            </Link>
            <nav className={styles.item}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/project">Project</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
                <Button weight="bold" uppercase={false}>
                    Contact
                </Button>
            </nav>
        </header>
    );
}
