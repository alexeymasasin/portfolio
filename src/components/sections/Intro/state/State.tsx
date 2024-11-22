import Exemplar from "../../../ui/Exemplar/Exemplar";
import styles from "./State.module.css";

import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

export default function State() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_half}>
        <h1>Title</h1>
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
          <Exemplar title="HTML" icon={<FaHtml5 />} style="tiny" />
          <Exemplar title="CSS" icon={<IoLogoCss3 />} style="tiny" />
          <Exemplar title="Git" icon={<FaGitAlt />} style="tiny" />
          <Exemplar
            title="Tailwind"
            icon={<RiTailwindCssFill />}
            style="tiny"
          />
        </div>
        <Exemplar title="Redux" icon={<SiRedux />} style="normal" />
        <div className={styles.collection}>
          <Exemplar title="TypeScript" icon={<SiTypescript />} style="tiny" />
          <Exemplar title="JavaScript" icon={<SiJavascript />} style="tiny" />
          <Exemplar title="Node.js" icon={<FaNodeJs />} style="tiny" />
          <Exemplar
            title="React-Router"
            icon={<SiReactrouter />}
            style="tiny"
          />
        </div>
        <Exemplar title="GitHub" icon={<FaGithub />} style="normal" />
      </div>
    </div>
  );
}
