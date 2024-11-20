import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button/Button";
import styles from "./Header.module.css";
import NavItem from "./NavItem";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { GoCalendar } from "react-icons/go";

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
                <div className={styles.item}>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/035/468/968/small_2x/ai-generated-cheerful-black-man-looking-at-camera-isolated-on-transparent-background-african-american-male-person-portrait-png.png"
                        alt="img"
                    />
                    <h2>Alexey Masasin</h2>
                </div>
            </Link>
            <nav className={styles.item}>
                <ul className={styles.nav_list}>
                    <NavItem text="Home" icon={<GoHome />} path="/" />
                    <NavItem text="About" icon={<GoPerson />} path="/about" />
                    <NavItem
                        text="Projects"
                        icon={<GoProjectSymlink />}
                        path="/projects"
                    />
                    <NavItem text="Resume" icon={<GoGraph />} path="/resume" />
                    <NavItem text="Work" icon={<GoCalendar />} path="/work" />
                </ul>
                <Button weight="bold" uppercase={false}>
                    Contact
                </Button>
            </nav>
        </header>
    );
}
