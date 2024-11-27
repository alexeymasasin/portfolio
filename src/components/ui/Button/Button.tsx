import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import Contacts from '../Contacts/Contacts';
import styles from './Button.module.css';

type ButtonProps = {
	onClick?: () => void;
	children: string | ReactNode;
	weight?: 'bold' | 'normal';
	uppercase?: boolean;
	style: 'wide' | 'square';
	title: string;
	bg?: 'dark';
};

export default function Button({
	title,
	onClick,
	children,
	weight,
	uppercase,
	style,
	bg,
}: ButtonProps) {
	const { t } = useTranslation();

	const [swalShown, setSwalShown] = useState(false);
	const showSwal = () => {
		Swal.fire({
			didOpen: () => setSwalShown(true),
			didClose: () => setSwalShown(false),
			confirmButtonText: t('CLOSE'),
		});
	};

	return (
		<>
			<button
				title={title}
				onClick={onClick ? onClick : showSwal}
				className={`${styles.wrapper} ${
					weight === 'bold' ? styles.bold : null
				} ${uppercase === true ? styles.uppercase : null} ${
					style === 'wide' ? styles.wide : styles.square
				} ${bg === 'dark' ? styles.dark_bg : null}`}
			>
				{children}
			</button>

			{swalShown && createPortal(<Contacts />, Swal.getHtmlContainer()!)}
		</>
	);
}
