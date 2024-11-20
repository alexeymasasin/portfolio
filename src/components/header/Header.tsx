import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
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
                    <li className={`${styles.nav_item}`}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : "")}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : "")}
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : "")}
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : "")}
                            to="/resume"
                        >
                            Resume
                        </NavLink>
                    </li>
                </ul>
                <Button weight="bold" uppercase={false}>
                    Contact
                </Button>
            </nav>
        </header>
    );
}
