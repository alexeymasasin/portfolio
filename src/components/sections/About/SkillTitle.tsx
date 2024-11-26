import styles from "./About.module.css";

type SkillTitleProps = {
    title: string;
};

export default function SkillTitle({ title }: SkillTitleProps) {
    return (
        <div className={styles.skill_title}>
            <h4>{title}</h4>
            <div className={styles.divider} />
        </div>
    );
}
