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
	SiFramer,
	SiGnubash,
	SiI18Next,
	SiMongodb,
	SiNeovim,
	SiNextdotjs,
	SiRadixui,
	SiReactrouter,
	SiWebpack,
} from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { VscGithubAlt, VscVscode } from 'react-icons/vsc';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import Button from '../../ui/Button/Button';
import Exemplar from '../../ui/Exemplar/Exemplar';
import styles from './About.module.css';
import ChapterTitle from './ChapterTitle';
import EducationTable from './EducationTable';

export default function About() {
	const { t } = useTranslation();

	useDocumentTitle('ABOUT');

	return (
		<div className={styles.wrapper}>
			<div className={styles.left_side}>
				<h2>{t('INTRODUCE_MYSELF')}</h2>
				<ChapterTitle title={t('GENERAL')} />
				<p>{t('ABOUT_ME_1')}</p>
				<p>{t('ABOUT_ME_2')}</p>
				<p>{t('ABOUT_ME_3')}</p>
				<ChapterTitle title={t('Education')} />
				<EducationTable />
				<ChapterTitle title={t('Contacts')} />
				<Button title={t('CLICK_TO_SHOW_CONTACTS')} style="wide" weight="bold">
					{t('CLICK_TO_SHOW_CONTACTS')}
				</Button>
			</div>
			<div className={styles.right_side}>
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
							title="CSS"
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
					<Exemplar
						href="https://redux.js.org/"
						title="Redux"
						icon={<SiMongodb />}
						style="normal"
					/>
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
		</div>
	);
}
