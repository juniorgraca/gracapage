export { projects };

interface propsProjects {
  id: number;
  name: string;
  desc: string;
  icon: string[];
  class: string;
}

const projects: propsProjects[] = [
  {
    id: 1,
    name: "UI - The Mandalorian",
    desc: "project-icons/content--img/mand.png",
    icon: ["project-icons/FIGMA-ICON.svg", "project-icons/PHOTSHOP-ICON.svg"],
    class: "container1",
  },
  {
    id: 2,
    name: "IMC - Calculator",
    desc: "project-icons/content--img/imc.png",
    icon: ["project-icons/TYPESCRIPT-ICON.svg", "project-icons/REACT-ICON.svg"],
    class: "container2",
  },
  {
    id: 3,
    name: "LOGO - CRJ",
    desc: "project-icons/content--img/logo.png",
    icon: [
      "project-icons/PHOTSHOP-ICON.svg",
      "project-icons/ILLUSTRATOR-ICON.svg",
    ],
    class: "container3",
  },
  {
    id: 4,
    name: "UI CARLOS GRAÇA PORTFOLIO",
    desc: "project-icons/content--img/imc.png",
    icon: [
      "project-icons/REACT-ICON.svg",
      "project-icons/TYPESCRIPT-ICON.svg",
      "project-icons/STYLEDCOMP-ICON.svg",
      "project-icons/FIGMA-ICON.svg",
      "project-icons/ILLUSTRATOR-ICON.svg",
      "project-icons/PHOTSHOP-ICON.svg",
    ],
    class: "container4",
  },
];
