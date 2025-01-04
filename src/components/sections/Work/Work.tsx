import { useTranslation } from 'react-i18next';
import styles from './Work.module.css';

export default function Work() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<h2 className="title">{t('WORK')}</h2>
			<p>{t('PAGE_IN_PROGRESS')}</p>
		</div>
	);
}
