import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import projects from './../../../constants/projects/projects.json';
import styles from './Projects.module.css';
import ProjectsItem from './ProjectsItem/ProjectsItem';

export default function Projects() {
	const { t } = useTranslation();
	useDocumentTitle('PROJECTS');

	return (
		<div className={styles.wrapper}>
			<h2 className="title">{t('PROJECTS')}</h2>
			<p>{t('PROJECTS_DESC')}</p>
			<div className={styles.item_list}>
				{projects.map((item) => {
					return (
						<ProjectsItem
							title={item.title}
							desc={item.desc}
							stack={item.stack}
							imagePath={item.imagePath}
							date={item.date}
							type={item.type}
							linkHref={item.linkHref}
							status={item.status}
						/>
					);
				})}
			</div>
		</div>
	);
}
