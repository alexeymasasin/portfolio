import useDocumentTitle from '../../../hooks/useDocumentTitle';
import styles from './About.module.css';
import Introducing from './Introducing';
import Skillset from './Skillset';

export default function About() {
	useDocumentTitle('ABOUT');

	return (
		<div className={styles.wrapper}>
			<Introducing />
			<Skillset />
		</div>
	);
}
