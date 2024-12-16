import { ReactNode } from 'react';
import { GoNorthStar } from 'react-icons/go';
import styles from './Marquee.module.css';

type MarqueeItemProps = {
	title: string;
	icon: ReactNode;
};

export default function MarqueeItem({ title, icon }: MarqueeItemProps) {
	return (
		<div className={styles.item__wrapper}>
			<div className={styles.item}>
				<div className={styles.item__icon}>{icon}</div>
				<p className={styles.item__title}>{title}</p>
			</div>
			<GoNorthStar />
		</div>
	);
}
