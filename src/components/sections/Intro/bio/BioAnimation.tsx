import { useTranslation } from "react-i18next";
import styles from "./Bio.module.css";

export default function BioAnimation() {
    const { t } = useTranslation();

    return (
        <div className={styles.animation}>
            <span className={styles.left_bracket}>{"<"}</span>
            <span className={styles.tag}>{t("QUICK_BIO")}</span>
            <span className={styles.slash}>{"/"}</span>
            <span className={styles.right_bracket}>{">"}</span>
        </div>
    );
}
