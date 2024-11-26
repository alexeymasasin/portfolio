import Exemplar from '../../../ui/Exemplar/Exemplar';
import styles from './State.module.css';

import { FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
	SiJavascript,
	SiNextdotjs,
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
				<Exemplar
					href="https://react.dev/"
					title="React"
					icon={<FaReact />}
					style="normal"
				/>
				<Exemplar
					href="https://nextjs.org/"
					title="Next.js"
					icon={<SiNextdotjs />}
					style="normal"
				/>
				<div className={styles.collection}>
					<Exemplar
						href="https://html.spec.whatwg.org/"
						title="HTML"
						icon={<FaHtml5 />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://www.w3.org/Style/CSS/Overview.en.html"
						title="CSS"
						icon={<IoLogoCss3 />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://git-scm.com/"
						title="Git"
						icon={<FaGitAlt />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://tailwindcss.com/"
						title="Tailwind"
						icon={<RiTailwindCssFill />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<Exemplar
					href="https://nodejs.org/en"
					title="Node.js"
					icon={<FaNodeJs />}
					style="normal"
				/>
				<div className={styles.collection}>
					<Exemplar
						href="https://www.typescriptlang.org/"
						title="TypeScript"
						icon={<SiTypescript />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						title="JavaScript"
						icon={<SiJavascript />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://redux.js.org/"
						title="Redux"
						icon={<SiRedux />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://reactrouter.com/"
						title="React-Router"
						icon={<SiReactrouter />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<Exemplar
					href="https://github.com/"
					title="GitHub"
					icon={<FaGithub />}
					style="normal"
				/>
			</div>
		</div>
	);
}
