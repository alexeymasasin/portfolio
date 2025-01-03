import { useTranslation } from 'react-i18next';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import styles from './ProjectsItem.module.css';

type ProjectsItemProps = {
	title: string;
	desc: string;
	imagePath?: string;
	linkHref: string;
	date: string;
	stack: string;
	type: string;
	status: string;
};

export default function ProjectsItem({
	title,
	desc,
	imagePath,
	linkHref,
	date,
	stack,
	type,
	status,
}: ProjectsItemProps) {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				{imagePath ? (
					<img src={imagePath} alt="Project Preview" />
				) : (
					<div className={styles.no_preview}>
						<MdOutlineImageNotSupported />
					</div>
				)}
				<div className={styles.main}>
					<h4>{title}</h4>
					<p>{t(`${desc}`)}</p>
				</div>
			</div>
			<div className={styles.right}>
				<p className={styles.stack}>
					{t('STACK')}
					{': '}
					{stack}
				</p>
				<p>{`${date}, ${t(`${status}`)}`}</p>
				<p>{t(`${type}`)}</p>
				<a href={linkHref} target="_blank">
					{t('PROJECT_LINK_TITLE')}
				</a>
			</div>
		</div>
	);
}
