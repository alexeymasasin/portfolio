import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactNode } from "react";

type NavItemProps = {
    text: string;
    icon: ReactNode;
    path: string;
    title: string;
};

export default function({ text, icon, path, title }: NavItemProps) {
    return (
        <li title={title} className={`${styles.nav_item}`}>
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
