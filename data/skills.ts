export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Front-End",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    id: "state",
    label: "State Management",
    skills: ["Zustand", "Redux"],
  },
  {
    id: "backend",
    label: "Back-End",
    skills: ["Node.js", "MongoDB", "REST APIs", "SQL"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: ["GitHub", "Axios", "Azure DevOps", "Vercel", "Netlify", "Sanity", "ClickUp"],
  },
  {
    id: "engineering",
    label: "Engineering Foundation",
    skills: ["Electrical Power Engineering", "C++", "OOP", "Problem Solving"],
  },
  {
    id: "communication",
    label: "Communication & Teaching",
    skills: ["Technical Instruction", "Mentoring", "Workshop Facilitation"],
  },
];
