import Button from "../../ui/Button/Button";
import styles from "./IntroBanner.module.css";

export default function() {
    return (
        <div className={styles.wrapper}>
            <h2>Hey! I'm Alexey, a Frontend Developer.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptate dignissimos esse quidem deleniti odit fugit? Culpa aliquam,
                delectus, distinctio nam ex amet magnam assumenda consectetur voluptates
                tenetur est debitis!
            </p>
            <div className={styles.actions}>
                <Button uppercase={true} weight="bold">
                    Contact me!
                </Button>
                <p>-- Email, Telegram, WhatsApp, Phone</p>
            </div>
        </div>
    );
}
