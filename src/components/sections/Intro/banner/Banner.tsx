import { useTranslation } from "react-i18next";
import Button from "../../../ui/Button/Button";
import styles from "./Banner.module.css";
import Photo from "./Photo";
import { IoMdContacts } from "react-icons/io";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h2>{t("GREETING")}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptate dignissimos esse quidem deleniti odit fugit? Culpa aliquam,
        delectus, distinctio nam ex amet magnam assumenda consectetur voluptates
        tenetur est debitis!
      </p>
      <div className={styles.actions}>
        <Button
          bg="dark"
          title={t("CONTACT_ME")}
          style="wide"
          uppercase={false}
          weight="bold"
        >
          {t("CONTACT_ME")} <IoMdContacts className={styles.icon} />
        </Button>
        <p> &mdash;</p>
        <p>{t("CONTACT_WAYS")}</p>
      </div>
      <Photo />
    </div>
  );
}
