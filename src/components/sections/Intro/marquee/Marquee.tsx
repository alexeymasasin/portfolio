import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import {
	FaFigma,
	FaGit,
	FaGithub,
	FaHtml5,
	FaNodeJs,
	FaPhp,
} from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoVercel } from 'react-icons/io5';
import {
	RiJavascriptFill,
	RiNpmjsFill,
	RiReactjsFill,
	RiTailwindCssFill,
} from 'react-icons/ri';
import {
	SiAxios,
	SiFramer,
	SiI18Next,
	SiNextdotjs,
	SiRadixui,
	SiReactrouter,
} from 'react-icons/si';
import styles from './Marquee.module.css';
import MarqueeItem from './MarqueeItem';

export default function Marquee() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.line}>
				<MarqueeItem title="React" icon={<RiReactjsFill />} />
				<MarqueeItem title="Redux" icon={<BiLogoRedux />} />
				<MarqueeItem title="Next.js" icon={<SiNextdotjs />} />
				<MarqueeItem title="TypeScipt" icon={<BiLogoTypescript />} />
				<MarqueeItem title="JavaScript" icon={<RiJavascriptFill />} />
				<MarqueeItem title="HTML" icon={<FaHtml5 />} />
				<MarqueeItem title="CSS" icon={<IoLogoCss3 />} />
				<MarqueeItem title="React-Router" icon={<SiReactrouter />} />
				<MarqueeItem title="Axios" icon={<SiAxios />} />
				<MarqueeItem title="i17Next" icon={<SiI18Next />} />
				<MarqueeItem title="TailwindCSS" icon={<RiTailwindCssFill />} />
				<MarqueeItem title="Framer Motion" icon={<SiFramer />} />
				<MarqueeItem title="Radix UI" icon={<SiRadixui />} />
				<MarqueeItem title="Node.js" icon={<FaNodeJs />} />
				<MarqueeItem title="Php" icon={<FaPhp />} />
				<MarqueeItem title="GitHub" icon={<FaGithub />} />
				<MarqueeItem title="NPM" icon={<RiNpmjsFill />} />
				<MarqueeItem title="Figma" icon={<FaFigma />} />
				<MarqueeItem title="Vercel" icon={<IoLogoVercel />} />
				<MarqueeItem title="Git" icon={<FaGit />} />
			</div>

			<div className={styles.line}>
				<MarqueeItem title="React" icon={<RiReactjsFill />} />
				<MarqueeItem title="Redux" icon={<BiLogoRedux />} />
				<MarqueeItem title="Next.js" icon={<SiNextdotjs />} />
				<MarqueeItem title="TypeScipt" icon={<BiLogoTypescript />} />
				<MarqueeItem title="JavaScript" icon={<RiJavascriptFill />} />
				<MarqueeItem title="HTML" icon={<FaHtml5 />} />
				<MarqueeItem title="CSS" icon={<IoLogoCss3 />} />
				<MarqueeItem title="React-Router" icon={<SiReactrouter />} />
				<MarqueeItem title="Axios" icon={<SiAxios />} />
				<MarqueeItem title="i17Next" icon={<SiI18Next />} />
				<MarqueeItem title="TailwindCSS" icon={<RiTailwindCssFill />} />
				<MarqueeItem title="Framer Motion" icon={<SiFramer />} />
				<MarqueeItem title="Radix UI" icon={<SiRadixui />} />
				<MarqueeItem title="Node.js" icon={<FaNodeJs />} />
				<MarqueeItem title="Php" icon={<FaPhp />} />
				<MarqueeItem title="GitHub" icon={<FaGithub />} />
				<MarqueeItem title="NPM" icon={<RiNpmjsFill />} />
				<MarqueeItem title="Figma" icon={<FaFigma />} />
				<MarqueeItem title="Vercel" icon={<IoLogoVercel />} />
				<MarqueeItem title="Git" icon={<FaGit />} />
			</div>
		</div>
	);
}
