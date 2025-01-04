import { useTranslation } from 'react-i18next';
import { PiReadCvLogoFill } from 'react-icons/pi';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import styles from './Resume.module.css';

export default function Resume() {
	const { t } = useTranslation();
	useDocumentTitle(t('RESUME'));

	return (
		<div className={styles.wrapper}>
			<h2 className="title">{t('RESUME')}</h2>
			<p className={styles.desc}>{t('RESUME_DESC')}</p>
			<a
				href="https://docs.google.com/document/d/1ZNB_ZSUsavwI0YxGsfluyCWjsWH7oQ4r3V1fqqDwBCg/edit?usp=sharing"
				target="_blank"
				className={styles.img_wrapper}
			>
				<PiReadCvLogoFill />
			</a>
		</div>
	);
}
