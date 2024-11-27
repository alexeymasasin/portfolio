import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiPhoneCallFill } from 'react-icons/pi';
import Divider from '../Divider/Divider';
import styles from './Contacts.module.css';
import ContactsForm from './ContactsForm';
import ContactsItem from './ContactsItem';

export default function Contacts() {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<h1>{t('CONTACT')}</h1>
			<Divider />
			<ContactsForm />
			<Divider />
			<div className={styles.items}>
				<ContactsItem
					href="mailto:alexeymasasin@gmail.com"
					title="Email"
					icon={<MdEmail />}
				/>
				<ContactsItem
					href="https://t.me/alexeymasasin"
					title="Telegram"
					icon={<FaTelegramPlane />}
				/>
				<ContactsItem
					href="tel:+7999059020"
					title="Phone"
					icon={<PiPhoneCallFill />}
				/>
				<ContactsItem
					href="https://github.com/alexeymasasin"
					title="Github"
					icon={<BsGithub />}
				/>
			</div>
		</div>
	);
}
