import { TimeEventProps } from "component/profile/TimeEvent";
import { SKillRowProps } from "component/skills/SkillTable";
//exported variables
export const title = "9779277e";

//content
export const history: TimeEventProps[] = [
  {
    date: "2017",
    topic: "Network engineer",
    content: [
      "Evaluation and implementation of failure detection system for corporate VPN",
      "Worked onsite at a carrier for a year",
      "Especially good at L2 ether layer",
    ],
  },
  {
    date: "2019 ~ Now",
    topic: "Software developer",
    content: [
      "Developing web service that works on AWS with hardware",
      "Mainly engaged in test automation and Ops/QA",
    ],
  },
];

export const aboutme: string[] = [
  "Software engineer, Network engineer from Yokohama",
  "Music composer, Audio engineer",
  "3DCG",
];

export const skills: SKillRowProps[] = [
  {
    index: "Backend",
    skills: [
      { name: "Python", level: "Speciallist" },
      { name: "bash", level: "Working" },
      { name: "Linux", level: "Working" },
      { name: "RDB", level: "Working" },
      { name: "OpenAPI", level: "Working" },
      { name: "Node.js", level: "Awareness" },
      { name: "golang", level: "Awareness" },
    ],
  },
  {
    index: "Infrastructure",
    skills: [
      { name: "Networking", level: "Speciallist" },
      { name: "AWS", level: "Working" },
      { name: "GitHub", level: "Working" },
      { name: "Docker", level: "Working" },
      { name: "AWS", level: "Working" },
    ],
  },
  {
    index: "Frontend",
    skills: [
      { name: "React", level: "Awareness" },
      { name: "TypeScript", level: "Awareness" },
      { name: "HTML5/CSS3", level: "Awareness" },
      { name: "GraphQL", level: "Awareness" },
    ],
  },
  {
    index: "aaaaaaaaa",
    skills: [{ name: "aaaaaaaaa", level: "aaaaaaaaa" }],
  },
];
