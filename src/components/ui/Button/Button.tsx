import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    onClick?: () => void;
    children: string | ReactNode;
    weight?: "bold" | "normal";
    uppercase?: boolean;
    style: "wide" | "square";
    title: string;
    bg?: "dark";
};

export default function Button({
    title,
    onClick,
    children,
    weight,
    uppercase,
    style,
    bg,
}: ButtonProps) {
    return (
        <button
            title={title}
            onClick={onClick}
            className={`${styles.wrapper} ${weight === "bold" ? styles.bold : null} ${uppercase === true ? styles.uppercase : null} ${style === "wide" ? styles.wide : styles.square} ${bg === "dark" ? styles.dark_bg : null}`}
        >
            {children}
        </button>
    );
}
