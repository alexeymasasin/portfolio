import { useTranslation } from 'react-i18next';
import { BiLogoNetlify, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import {
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaNodeJs,
	FaPhp,
	FaReact,
} from 'react-icons/fa';
import { GrArchlinux } from 'react-icons/gr';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoVercel } from 'react-icons/io5';
import {
	RiCopilotFill,
	RiJavascriptFill,
	RiNpmjsFill,
	RiTailwindCssFill,
} from 'react-icons/ri';
import {
	SiAxios,
	SiDocker,
	SiDotenv,
	SiFramer,
	SiGnubash,
	SiI18Next,
	SiMongodb,
	SiNeovim,
	SiNextdotjs,
	SiPrisma,
	SiRadixui,
	SiReactrouter,
	SiWebpack,
} from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { VscGithubAlt, VscVscode } from 'react-icons/vsc';
import Exemplar from '../../ui/Exemplar/Exemplar';
import styles from './About.module.css';
import ChapterTitle from './ChapterTitle';

export default function Skillset() {
	const { t } = useTranslation();

	return (
		<div className={styles.skillset}>
			<h3>{t('MY_SKILLSET')}</h3>
			<ChapterTitle title="Frontend" />

			<div className={styles.stack}>
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
						href="https://www.typescriptlang.org/"
						title="TypeScript"
						icon={<BiLogoTypescript />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						title="JavaScript"
						icon={<RiJavascriptFill />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://html.spec.whatwg.org/"
						title="HTML"
						icon={<FaHtml5 />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://www.w3.org/Style/CSS/Overview.en.html"
						title="CSS"
						icon={<IoLogoCss3 />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<Exemplar
					href="https://redux.js.org/"
					title="Redux"
					icon={<BiLogoRedux />}
					style="normal"
				/>
				<div className={styles.collection}>
					<Exemplar
						href="https://reactrouter.com/"
						title="React-Router"
						icon={<SiReactrouter />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://axios-http.com/"
						title="Axios"
						icon={<SiAxios />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://www.i18next.com/"
						title="i18Next"
						icon={<SiI18Next />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://webpack.js.org/"
						title="Webpack"
						icon={<SiWebpack />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<div className={styles.collection}>
					<Exemplar
						href="https://tailwindcss.com/"
						title="TailwindCSS"
						icon={<RiTailwindCssFill />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://motion.dev/"
						title="Framer Motion"
						icon={<SiFramer />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://www.radix-ui.com/"
						title="RadixUI"
						icon={<SiRadixui />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://www.w3.org/Style/CSS/Overview.en.html"
						title="Vite"
						icon={<TbBrandVite />}
						style="tiny"
						border="bot-right"
					/>
				</div>
			</div>
			<ChapterTitle title="Backend" />
			<div className={styles.stack}>
				<Exemplar
					href="https://nodejs.org/en"
					title="Node.js"
					icon={<FaNodeJs />}
					style="normal"
				/>
				<Exemplar
					href="https://www.php.net/"
					title="Php"
					icon={<FaPhp />}
					style="normal"
				/>
				<div className={styles.collection}>
					<Exemplar
						href="https://www.prisma.io/"
						title="Prisma"
						icon={<SiPrisma />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://www.mongodb.com/"
						title="MongoDB"
						icon={<SiMongodb />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://www.npmjs.com/package/dotenv"
						title="Dotenv"
						icon={<SiDotenv />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://www.docker.com/"
						title="Docker"
						icon={<SiDocker />}
						style="tiny"
						border="bot-right"
					/>
				</div>
			</div>
			<ChapterTitle title="Tools" />
			<div className={styles.stack}>
				<Exemplar
					href="https://git-scm.com/"
					title="Git"
					icon={<FaGitAlt />}
					style="normal"
				/>
				<Exemplar
					href="https://www.github.com/"
					title="GitHub"
					icon={<FaGithub />}
					style="normal"
				/>

				<div className={styles.collection}>
					<Exemplar
						href="https://neovim.io/"
						title="Neovim"
						icon={<SiNeovim />}
						style="tiny"
						border="top-left"
					/>
					<Exemplar
						href="https://code.visualstudio.com/"
						title="VSCode"
						icon={<VscVscode />}
						style="tiny"
						border="top-right"
					/>
					<Exemplar
						href="https://archlinux.org/"
						title="ArchLinux"
						icon={<GrArchlinux />}
						style="tiny"
						border="bot-left"
					/>
					<Exemplar
						href="https://www.gnu.org/software/bash/"
						title="Bash"
						icon={<SiGnubash />}
						style="tiny"
						border="bot-right"
					/>
				</div>
				<Exemplar
					href="https://www.npmjs.com/"
					title="NPM"
					icon={<RiNpmjsFill />}
					style="normal"
				/>
				<Exemplar
					href="https://www.figma.com/"
					title="Figma"
					icon={<FaFigma />}
					style="normal"
				/>
				<Exemplar
					href="https://copilot.microsoft.com/"
					title="Copilot"
					icon={<RiCopilotFill />}
					style="normal"
				/>
			</div>
			<ChapterTitle title="Host" />
			<div className={styles.stack}>
				<Exemplar
					href="https://vercel.com/"
					title="Vercel"
					icon={<IoLogoVercel />}
					style="normal"
				/>
				<Exemplar
					href="https://pages.github.com/"
					title="GitHub Pages"
					icon={<VscGithubAlt />}
					style="normal"
				/>
				<Exemplar
					href="https://www.netlify.com/"
					title="Netlify"
					icon={<BiLogoNetlify />}
					style="normal"
				/>
			</div>
		</div>
	);
}
