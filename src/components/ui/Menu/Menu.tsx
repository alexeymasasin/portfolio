import { useTranslation } from "react-i18next";
import styles from "./Menu.module.css";
import NavItem from "../../header/NavItem";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function Menu() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <h1>{t("MENU")}</h1>
            <NavItem
                title={t("HOME")}
                text={t("HOME")}
                icon={<GoHome />}
                path="/portfolio"
            />
            <NavItem
                title={t("HOME")}
                text={t("HOME")}
                icon={<GoHome />}
                path="/portfolio"
            />
            <NavItem
                title={t("HOME")}
                text={t("HOME")}
                icon={<GoHome />}
                path="/portfolio"
            />
            <NavItem
                title={t("HOME")}
                text={t("HOME")}
                icon={<GoHome />}
                path="/portfolio"
            />
        </div>
    );
}
