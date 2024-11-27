import useDocumentTitle from '../../../hooks/useDocumentTitle';
import Banner from './banner/Banner';
import styles from './Intro.module.css';
import State from './state/State';

export default function Intro() {
	useDocumentTitle('HOME');
	return (
		<section className={styles.wrapper}>
			<Banner />
			<State />
		</section>
	);
}
