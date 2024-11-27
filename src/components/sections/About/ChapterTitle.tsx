import styles from './About.module.css';

type ChapterTitleProps = {
	title: string;
};

export default function ChapterTitle({ title }: ChapterTitleProps) {
	return (
		<div className={styles.chapter_title}>
			<h4>{title}</h4>
			<div className={styles.divider} />
		</div>
	);
}
