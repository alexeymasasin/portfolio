import { useTranslation } from 'react-i18next';
import { MdDone } from 'react-icons/md';
import styles from './Contacts.module.css';

export default function ContactsForm() {
	const { t } = useTranslation();

	return (
		<form
			action="https://fabform.io/f/R6WVjAW"
			method="post"
			className={styles.form}
		>
			<div>
				<label htmlFor="firstName">
					{t('FIRST_NAME')}
					<input name="firstName" type="text" required />
				</label>
				<label htmlFor="lastName">
					{t('LAST_NAME')}
					<input name="lastName" type="text" required />
				</label>
				<label htmlFor="message">
					{t('MESSAGE')}
					<textarea id="message" name="message" required />
				</label>
			</div>
			<button type="submit">
				<MdDone />
			</button>
		</form>
	);
}
