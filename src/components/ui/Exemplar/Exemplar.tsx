import { ReactNode } from "react";
import styles from "./Exemplar.module.css";

type ExemplarProps = {
    icon: ReactNode;
    title: string;
    style: "normal" | "tiny";
};

export default function Exemplar({ icon, title, style }: ExemplarProps) {
    return (
        <div
            title={title}
            className={`${styles.wrapper} ${style === "normal" ? styles.normal : styles.tiny}`}
        >
            {icon}
        </div>
    );
}
