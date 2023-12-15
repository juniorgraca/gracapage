export { projects };

interface propsProjects {
  id: number;
  name: string;
  desc: string;
  icon: string[];
  class: string;
  img:string
  link:string
}

const projects: propsProjects[] = [
  {
    id: 0,
    name: "UI - The Mandalorian",
    img: "project-icons/content--img/mand.png",
    desc:"UI - Site The Mandalorian",
    icon: ["project-icons/FIGMA-ICON.svg", "project-icons/PHOTSHOP-ICON.svg"],
    class: "container1",
    link:"test1"
  },
  {
    id: 1,
    name: "IMC - Calculator",
    img: "project-icons/content--img/imc.png",
    desc:"Projeto de Ui/Dev",
    icon: ["project-icons/TYPESCRIPT-ICON.svg", "project-icons/REACT-ICON.svg"],
    class: "container2",
    link:"test2"
  },
  {
    id: 2,
    name: "LOGO - CRJ",
    img: "project-icons/content--img/logo.png",
    desc:"Logo designer - CJR Pisos Industriais",
    icon: [
      "project-icons/PHOTSHOP-ICON.svg",
      "project-icons/ILLUSTRATOR-ICON.svg",
      
    ],
    class: "container3",
    link:"test3"
  },
  {
    id: 3,
    name: "UI CARLOS GRAÇA PORTFOLIO",
    img: "project-icons/content--img/port.png",
    desc:"Projeto - UI - DEV Meu Portfolio ",
    link:"test4",
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
