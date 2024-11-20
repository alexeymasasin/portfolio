import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactNode } from "react";

type NavItemProps = {
    text: string;
    icon: ReactNode;
    path: string;
};

export default function({ text, icon, path }: NavItemProps) {
    return (
        <li className={`${styles.nav_item}`}>
            <NavLink
                className={({ isActive }) =>
                    (isActive ? styles.active : "") + " " + styles.nav_link
                }
                to={path}
            >
                {icon}
                {text}
            </NavLink>
        </li>
    );
}
