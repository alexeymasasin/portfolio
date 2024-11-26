import { ReactNode } from 'react';
import styles from './Exemplar.module.css';

type ExemplarProps = {
	icon: ReactNode;
	title: string;
	style: 'normal' | 'tiny';
	border?: 'top-left' | 'top-right' | 'bot-left' | 'bot-right';
	href?: string;
};

export default function Exemplar({
	icon,
	title,
	style,
	border,
	href,
}: ExemplarProps) {
	return (
		<a
			target="_blank"
			href={href}
			title={title}
			className={`${styles.wrapper} ${
				style === 'normal' ? styles.normal : styles.tiny
			} ${
				border === 'top-left'
					? styles.top_left
					: border === 'top-right'
					? styles.top_right
					: border === 'bot-left'
					? styles.bot_left
					: border === 'bot-right'
					? styles.bot_right
					: ''
			}`}
		>
			{icon}
		</a>
	);
}
