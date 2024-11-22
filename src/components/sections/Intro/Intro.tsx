import Banner from "./banner/Banner";
import State from "./state/State";
import styles from "./Intro.module.css";

export default function Intro() {
    return (
        <section className={styles.wrapper}>
            <Banner />
            <State />
        </section>
    );
}
