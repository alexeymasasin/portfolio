import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left_side}>
                <h2>Let me introduce myself</h2>
                <p></p>
            </div>
            <div className={styles.right_side}>
                <h3>My stack</h3>
            </div>
        </div>
    );
}
