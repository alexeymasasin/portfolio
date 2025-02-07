import useDocumentTitle from '../../../hooks/useDocumentTitle';
import Banner from './banner/Banner';
import Bio from './bio/Bio';
import styles from './Intro.module.css';
import Marquee from './marquee/Marquee';

export default function Intro() {
	useDocumentTitle('HOME');
	return (
		<section className={styles.wrapper}>
			<Banner />
			<Marquee />
			<Bio />
			{/* <State /> */}
		</section>
	);
}
