import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

export default function EducationTable() {
	const { t } = useTranslation();

	return (
		<table className={styles.table}>
			<tr>
				<td align="center" colSpan={3}>
					{t('DEGREE')}
				</td>
			</tr>
			<tr>
				<td align="center">
					{t('MTI')}
					<br />
					<sup>({t('MOSCOW_RUSSIA')})</sup>
				</td>
				<td align="center">
					{t('MTI_COURSE_NAME')}
					<br />
					{t('MTI_COURSE_CODE')}
				</td>
				<td align="center">
					{t('MTI_COURSE_DEGREE')}
					<br />
					(2024 - ...)
				</td>
			</tr>
		</table>
	);
}
