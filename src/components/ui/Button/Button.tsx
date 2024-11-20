import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    children: string | ReactNode;
    weight: "bold" | "normal";
    uppercase: boolean;
};

export default function Button({ children, weight, uppercase }: ButtonProps) {
    return (
        <button
            className={`${styles.wrapper} ${weight === "bold" ? styles.bold : null} ${uppercase === true ? styles.uppercase : null}`}
        >
            {children}
        </button>
    );
}
