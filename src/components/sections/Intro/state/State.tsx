import Exemplar from '../../../ui/Exemplar/Exemplar';
import styles from './State.module.css';

import { FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
	SiJavascript,
	SiReactrouter,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';

export default function State() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left_half}>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
					ullam repellat culpa. Temporibus saepe aut cupiditate iure,
					perferendis libero commodi numquam labore mollitia quos laborum ea
					eaque ipsa assumenda voluptatum!
				</p>
			</div>
			<div className={styles.right_half}>
				<Exemplar title="React" icon={<FaReact />} style="normal" />
				<Exemplar title="Next.js" icon={<RiNextjsFill />} style="normal" />
				<div className={styles.collection}>
					<Exemplar
						title="HTML"
						icon={<FaHtml5 />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						title="CSS"
						icon={<IoLogoCss3 />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						title="Git"
						icon={<FaGitAlt />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						title="Tailwind"
						icon={<RiTailwindCssFill />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<Exemplar title="Redux" icon={<SiRedux />} style="normal" />
				<div className={styles.collection}>
					<Exemplar
						title="TypeScript"
						icon={<SiTypescript />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						title="JavaScript"
						icon={<SiJavascript />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						title="Node.js"
						icon={<FaNodeJs />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						title="React-Router"
						icon={<SiReactrouter />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<Exemplar title="GitHub" icon={<FaGithub />} style="normal" />
			</div>
		</div>
	);
}
