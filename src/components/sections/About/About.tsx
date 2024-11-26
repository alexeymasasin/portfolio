import { FaReact } from "react-icons/fa";
import Exemplar from "../../ui/Exemplar/Exemplar";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";
import SkillTitle from "./SkillTitle";
import { RiNextjsFill } from "react-icons/ri";

export default function About() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.left_side}>
                <h2>{t("INTRODUCE_MYSELF")}</h2>
                <p></p>
            </div>
            <div className={styles.right_side}>
                <h3>{t("MY_SKILLSET")}</h3>
                <SkillTitle title="Frontend" />

                <div className={styles.stack}>
                    <Exemplar
                        href="https://react.dev/"
                        title="React"
                        icon={<FaReact />}
                        style="normal"
                    />
                    <Exemplar
                        href="https://nextjs.org/"
                        title="Next.js"
                        icon={<RiNextjsFill />}
                        style="normal"
                    />
                    <div className={styles.collection}>
                        <Exemplar
                            href="https://html.spec.whatwg.org/"
                            title="HTML"
                            icon={<FaReact />}
                            style="tiny"
                            border="top-left"
                        />
                        <Exemplar
                            href="https://www.w3.org/Style/CSS/Overview.en.html"
                            title="CSS"
                            icon={<FaReact />}
                            style="tiny"
                            border="top-right"
                        />
                        <Exemplar
                            href="https://git-scm.com/"
                            title="Git"
                            icon={<FaReact />}
                            style="tiny"
                            border="bot-left"
                        />
                        <Exemplar
                            href="https://tailwindcss.com/"
                            title="Tailwind"
                            icon={<FaReact />}
                            style="tiny"
                            border="bot-right"
                        />
                    </div>
                    <Exemplar
                        href="https://react.dev/"
                        title="React"
                        icon={<FaReact />}
                        style="normal"
                    />
                </div>
            </div>
        </div>
    );
}
