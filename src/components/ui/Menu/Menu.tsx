import { useTranslation } from 'react-i18next';
import {
	GoCalendar,
	GoGraph,
	GoHome,
	GoPerson,
	GoProjectSymlink,
} from 'react-icons/go';
import styles from './Menu.module.css';
import MenuItem from './MenuItem';

export default function Menu() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<h2>{t('MENU')}</h2>
			<nav className={styles.navigation}>
				<MenuItem to="/" title={t('HOME')} icon={<GoHome />} />
				<MenuItem to="/about" title={t('ABOUT')} icon={<GoPerson />} />
				<MenuItem
					to="/projects"
					title={t('PROJECTS')}
					icon={<GoProjectSymlink />}
				/>
				<MenuItem to="/resume" title={t('RESUME')} icon={<GoGraph />} />
				<MenuItem to="/work" title={t('WORK')} icon={<GoCalendar />} />
			</nav>
		</div>
	);
}
