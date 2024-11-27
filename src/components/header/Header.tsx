import { useTranslation } from 'react-i18next';
import {
	GoCalendar,
	GoGraph,
	GoHome,
	GoPerson,
	GoProjectSymlink,
} from 'react-icons/go';
import { LiaLanguageSolid } from 'react-icons/lia';
import { RiContactsBook3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../ui/Button/Button';
import i18n from './../../i18n';
import styles from './Header.module.css';
import NavItem from './NavItem';

export default function Header() {
	const { t } = useTranslation();
	const [language, setLanguage] = useLocalStorage('language', 'ru');

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
						src="https://static.vecteezy.com/system/resources/thumbnails/035/468/968/small_2x/ai-generated-cheerful-black-man-looking-at-camera-isolated-on-transparent-background-african-american-male-person-portrait-png.png"
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
						title={t('HOME')}
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
					title={t('CONTACT_ME')}
					style="square"
					weight="bold"
					uppercase={true}
				>
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
