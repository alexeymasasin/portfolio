import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
	GoCalendar,
	GoGraph,
	GoHome,
	GoPerson,
	GoProjectSymlink,
} from 'react-icons/go';
import { LiaLanguageSolid } from 'react-icons/lia';
import { RiContactsBook3Line, RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../ui/Button/Button';
import Menu from '../ui/Menu/Menu';
import i18n from './../../i18n';
import styles from './Header.module.css';
import NavItem from './NavItem';

export default function Header() {
	const { t } = useTranslation();
	const [language, setLanguage] = useLocalStorage('language', 'ru');

	const [menuShown, setMenuShown] = useState(false);
	const handleOpenMenu = () => {
		Swal.fire({
			didOpen: () => setMenuShown(true),
			didClose: () => setMenuShown(false),
			confirmButtonText: t('CLOSE'),
		});
	};

	const handleLanguageChange = () => {
		if (language === 'en') {
			setLanguage('ru');
			i18n.changeLanguage('ru');
		}

		if (language === 'ru') {
			setLanguage('en');
			i18n.changeLanguage('en');
		}
	};

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
			<nav className={styles.item}>
				<ul className={styles.nav_list}>
					<NavItem
						title={t('HOME')}
						text={t('HOME')}
						icon={<GoHome />}
						path="/portfolio"
					/>
					<NavItem
						title={t('ABOUT')}
						text={t('ABOUT')}
						icon={<GoPerson />}
						path="/portfolio/about"
					/>
					<NavItem
						title={t('PROJECTS')}
						text={t('PROJECTS')}
						icon={<GoProjectSymlink />}
						path="/portfolio/projects"
					/>
					<NavItem
						title={t('RESUME')}
						text={t('RESUME')}
						icon={<GoGraph />}
						path="/portfolio/resume"
					/>
					<NavItem
						title={t('WORK')}
						text={t('WORK')}
						icon={<GoCalendar />}
						path="/portfolio/work"
					/>
				</ul>
				<Button
					title={t('MENU')}
					style="square"
					onClick={handleOpenMenu}
					desktopHidden={true}
				>
					<RiMenuFill />
				</Button>
				{menuShown && createPortal(<Menu />, Swal.getHtmlContainer()!)}

				<Button title={t('CONTACT_ME')} style="square" weight="bold">
					<RiContactsBook3Line />
				</Button>
				<Button
					title={t('CHANGE_LANGUAGE')}
					style="square"
					onClick={handleLanguageChange}
				>
					<LiaLanguageSolid />
				</Button>
			</nav>
		</header>
	);
}
