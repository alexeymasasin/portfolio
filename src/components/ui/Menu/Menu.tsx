import { useTranslation } from 'react-i18next';
import { GoHome } from 'react-icons/go';
import NavItem from '../../header/NavItem';
import styles from './Menu.module.css';

export default function Menu() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<h1>{t('MENU')}</h1>
			<NavItem
				title={t('HOME')}
				text={t('HOME')}
				icon={<GoHome />}
				path="/portfolio"
			/>
			<NavItem
				title={t('HOME')}
				text={t('HOME')}
				icon={<GoHome />}
				path="/portfolio"
			/>
			<NavItem
				title={t('HOME')}
				text={t('HOME')}
				icon={<GoHome />}
				path="/portfolio"
			/>
			<NavItem
				title={t('HOME')}
				text={t('HOME')}
				icon={<GoHome />}
				path="/portfolio"
			/>
		</div>
	);
}
