import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import NavList from './NavList';
import avatar from '/img/avatars/transparent-bg.png';

export default function Header() {
	const { t } = useTranslation();

	return (
		<header className={styles.wrapper}>
			<Link to="/portfolio" className={styles.logo}>
				<div className={styles.item}>
					<img src={avatar} alt="img" />
					<h2>{t('ALEXEY_MASASIN')}</h2>
				</div>
			</Link>
			<NavList />
		</header>
	);
}
