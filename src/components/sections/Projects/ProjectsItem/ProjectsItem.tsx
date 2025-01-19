import { useTranslation } from 'react-i18next';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import styles from './ProjectsItem.module.css';

type ProjectsItemProps = {
	title: string;
	desc: string;
	imagePath?: string;
	deployLink?: string;
	repositoryLink?: string;
	date: string;
	stack: string;
	type: string;
	status: string;
};

export default function ProjectsItem({
	title,
	desc,
	imagePath,
	deployLink,
	repositoryLink,
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
					<p className={styles.stack}>
						{t('STACK')}
						{': '}
						{stack}
					</p>
				</div>
			</div>
			<div className={styles.right}>
				<p>{`${date}, ${t(`${status}`)}`}</p>
				<p>{t(`${type}`)}</p>
				{deployLink ? (
					<a href={deployLink} target="_blank">
						{t('DEPLOY_LINK_TITLE')}
					</a>
				) : null}
				{repositoryLink ? (
					<a href={repositoryLink} target="_blank">
						{t('REPOSITORY_LINK_TITLE')}
					</a>
				) : (
					'a'
				)}
			</div>
		</div>
	);
}
