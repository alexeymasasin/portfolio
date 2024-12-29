import { useTranslation } from 'react-i18next';
import { BsArrowReturnRight } from 'react-icons/bs';
import styles from './Header.module.css';

export default function MenuPointer() {
	const { t } = useTranslation();

	return (
		<div className={styles.pointer}>
			{t('MENU')}
			<span className={styles.pointer__arrow}>
				<BsArrowReturnRight />
			</span>
		</div>
	);
}
