import { useTranslation } from "react-i18next";
import styles from "./Bio.module.css";
import { NavLink } from "react-router-dom";

export default function BioTextContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.text_content}>
            <p className={styles.bio_main}>{t("BIO_MAIN_1")}</p>
            <p className={styles.bio_main}>{t("BIO_MAIN_2")}</p>
            <p className={styles.bio_main}>{t("BIO_MAIN_3")}</p>
            <p>{t("BIO_EXTRA")}</p>
            <p>
                {t("MORE_BIO")}{" "}
                <NavLink to="/portfolio/about">
                    <span className={styles.bio_link}>{t("MORE_BIO_LINK")}</span>
                </NavLink>
            </p>
        </div>
    );
}
