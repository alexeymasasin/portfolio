import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

type NavItemProps = {
	text: string;
	icon: ReactNode;
	path: string;
	title: string;
};

export default function NavItem({ text, icon, path, title }: NavItemProps) {
	return (
		<li title={title} className={`${styles.nav_item}`}>
			<NavLink
				className={({ isActive }) =>
					(isActive ? styles.active : '') + ' ' + styles.nav_link
				}
				to={path}
				end
			>
				{icon}
				{text}
			</NavLink>
		</li>
	);
}
