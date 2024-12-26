import { useTranslation } from "react-i18next";
import Button from "../../ui/Button/Button";
import styles from "./About.module.css";
import ChapterTitle from "./ChapterTitle";
import EducationTable from "./EducationTable";

export default function Introducing() {
    const { t } = useTranslation();

    return (
        <div className={styles.introducing}>
            <h2>{t("INTRODUCE_MYSELF")}</h2>
            <ChapterTitle title={t("GENERAL")} />
            <p>{t("BIO_MAIN")}</p>
            <p>{t("BIO_EXTRA")}</p>
            <ChapterTitle title={t("EDUCATION")} />
            <EducationTable />
            <ChapterTitle title={t("EDUCATION_EXTRA")} />
            <ChapterTitle title={t("CONTACTS")} />
            <Button title={t("CLICK_TO_SHOW_CONTACTS")} style="wide" weight="bold">
                {t("CLICK_TO_SHOW_CONTACTS")}
            </Button>
        </div>
    );
}
