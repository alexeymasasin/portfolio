import { useTranslation } from "react-i18next";
import { BiLogoTelegram } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import Divider from "../Divider/Divider";
import styles from "./Contacts.module.css";
import ContactsForm from "./ContactsForm";
import ContactsItem from "./ContactsItem";

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <h3>{t("CONTACT")}</h3>
            <ContactsForm />
            <Divider />
            <div className={styles.items}>
                <ContactsItem
                    href="mailto:alexeymasasin@gmail.com"
                    title="Email"
                    icon={<MdEmail />}
                />
                <ContactsItem
                    href="https://t.me/alexeymasasin"
                    title="Telegram"
                    icon={<BiLogoTelegram />}
                />
                <ContactsItem
                    href="tel:+7999059020"
                    title={t("PHONE")}
                    icon={<PiPhoneCallFill />}
                />
                <ContactsItem
                    href="https://github.com/alexeymasasin"
                    title="Github"
                    icon={<BsGithub />}
                />
            </div>
        </div>
    );
}
