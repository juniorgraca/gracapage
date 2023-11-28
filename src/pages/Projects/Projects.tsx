import { projects } from "../../types/projects";
import {
  StyledProjectImg,
  TitleNav,
  Pnav,
  ContentNav,
  TitleandImg,
} from "../../components/Projects.style";

export default function Projects() {
  const MapAdd = () => {
    const mappedItems = projects.map((item) => (
      <TitleandImg className={item.class}>
        <TitleNav>
          {item.name}
          {item.icon.map((icon) => (
            <StyledProjectImg src={icon} alt="Ícone" />
          ))}
        </TitleNav>
        <ContentNav imgeUrl={item.desc}> {item.desc}</ContentNav>
      </TitleandImg>
    ));
    return mappedItems;
  };

  return <Pnav>{MapAdd()}</Pnav>;
}
