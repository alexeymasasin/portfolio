import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import styles from "./Header.module.css";
import NavItem from "./NavItem";
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { GoCalendar } from "react-icons/go";
import useLocalStorage from "../../hooks/useLocalStorage";
import i18n from "./../../i18n";
import { useTranslation } from "react-i18next";
import { LiaLanguageSolid } from "react-icons/lia";
import { RiContactsBook3Line } from "react-icons/ri";

export default function Header() {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage("language", "ru");

    const handleLanguageChange = () => {
        if (language === "en") {
            i18n.changeLanguage("ru");
            setLanguage("ru");
        } else if (language === "ru") {
            i18n.changeLanguage("en");
            setLanguage("en");
        }
    };

    return (
        <header className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
                <div className={styles.item}>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/035/468/968/small_2x/ai-generated-cheerful-black-man-looking-at-camera-isolated-on-transparent-background-african-american-male-person-portrait-png.png"
                        alt="img"
                    />
                    <h2>{t("ALEXEY_MASASIN")}</h2>
                </div>
            </Link>
            <nav className={styles.item}>
                <ul className={styles.nav_list}>
                    <NavItem
                        title={t("HOME")}
                        text={t("HOME")}
                        icon={<GoHome />}
                        path="/"
                    />
                    <NavItem
                        title={t("HOME")}
                        text={t("ABOUT")}
                        icon={<GoPerson />}
                        path="/about"
                    />
                    <NavItem
                        title={t("PROJECTS")}
                        text={t("PROJECTS")}
                        icon={<GoProjectSymlink />}
                        path="/projects"
                    />
                    <NavItem
                        title={t("RESUME")}
                        text={t("RESUME")}
                        icon={<GoGraph />}
                        path="/resume"
                    />
                    <NavItem
                        title={t("WORK")}
                        text={t("WORK")}
                        icon={<GoCalendar />}
                        path="/work"
                    />
                </ul>
                <Button
                    title={t("CONTACT_ME")}
                    style="square"
                    weight="bold"
                    uppercase={true}
                >
                    <RiContactsBook3Line />
                </Button>
                <Button
                    title={t("CHANGE_LANGUAGE")}
                    style="square"
                    onClick={handleLanguageChange}
                >
                    <LiaLanguageSolid />
                </Button>
            </nav>
        </header>
    );
}
