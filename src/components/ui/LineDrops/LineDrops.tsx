import styles from "./LineDrops.module.sass";

export default function LineDrops() {
  return (
    <div className={styles.lines}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
}
