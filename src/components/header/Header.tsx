import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import NavList from './NavList';

export default function Header() {
	const { t } = useTranslation();

	return (
		<header className={styles.wrapper}>
			<Link to="/portfolio" className={styles.logo}>
				<div className={styles.item}>
					<img
						src="https://avatars.githubusercontent.com/u/101698179?v=4"
						alt="img"
					/>
					<h2>{t('ALEXEY_MASASIN')}</h2>
				</div>
			</Link>
			<NavList />
		</header>
	);
}
