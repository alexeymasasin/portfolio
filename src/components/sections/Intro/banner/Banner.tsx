import { useTranslation } from 'react-i18next';
import { IoMdContacts } from 'react-icons/io';
import Button from '../../../ui/Button/Button';
import styles from './Banner.module.css';

export default function Banner() {
	const { t } = useTranslation();
	return (
		<div className={styles.wrapper}>
			<h2>
				{t('GREETING')} <br />
				{t('I_AM')}
				<span className={styles.professtion}>{t('PROFESSION')}</span>
			</h2>
			<p className={styles.desc}>{t('GLOBAL_DESC')}</p>
			<div className={styles.actions}>
				<Button
					bg="dark"
					title={t('CONTACT_ME')}
					style="wide"
					uppercase={false}
					weight="bold"
				>
					{t('CONTACT_ME')} <IoMdContacts className={styles.icon} />
				</Button>
				<p> &mdash;</p>
				<p>{t('CONTACT_WAYS')}</p>
			</div>
			{/* <Photo /> */}
		</div>
	);
}
