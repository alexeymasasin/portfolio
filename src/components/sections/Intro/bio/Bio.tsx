import BioAnimation from "./BioAnimation";
import BioTextContent from "./BioTextContent";
import styles from "./Bio.module.css";

export default function Bio() {
  return (
    <div className={styles.wrapper}>
      <BioAnimation />
      <BioTextContent />
    </div>
  );
}
