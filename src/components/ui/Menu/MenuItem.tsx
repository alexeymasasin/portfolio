import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './Menu.module.css';

type MenuItemProps = {
	title: string;
	to: string;
	icon: ReactNode;
};

export default function MenuItem({ title, to, icon }: MenuItemProps) {
	return (
		<NavLink
			className={styles.item}
			to={`portfolio${to}`}
			onClick={() => Swal.close()}
		>
			{icon}
			{title}
		</NavLink>
	);
}
