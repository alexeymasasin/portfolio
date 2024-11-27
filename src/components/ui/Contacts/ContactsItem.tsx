import { ReactNode } from 'react';
import styles from './Contacts.module.css';

type ContactsItemProps = {
	icon: ReactNode;
	title: string;
	href: string;
};

export default function ContactsItem({ icon, title, href }: ContactsItemProps) {
	return (
		<a href={href} target="_blank" title={title} className={styles.item}>
			{icon}
		</a>
	);
}
