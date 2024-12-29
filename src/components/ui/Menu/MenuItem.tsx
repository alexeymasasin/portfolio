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
		<div className={styles.item} onClick={() => Swal.close()}>
			<NavLink to={`portfolio${to}`}>
				{icon}
				{title}
			</NavLink>
		</div>
	);
}
