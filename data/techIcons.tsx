import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiSanity,
  SiFlutter,
  SiHtml5,
  SiCss,
  SiClickup,
} from "react-icons/si";

export interface TechIcon {
  name: string;
  Icon: IconType;
}

export const techIcons: TechIcon[] = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Material UI", Icon: SiMui },
  { name: "Redux", Icon: SiRedux },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Sanity", Icon: SiSanity },
  { name: "Flutter", Icon: SiFlutter },
  { name: "GitHub", Icon: SiGithub },
  { name: "Vercel", Icon: SiVercel },
  { name: "Netlify", Icon: SiNetlify },
  { name: "ClickUp", Icon: SiClickup },
];
