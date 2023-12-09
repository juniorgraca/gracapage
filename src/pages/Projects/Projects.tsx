import { projects } from "../../types/projects";
import {
  StyledProjectImg,
  TitleNav,
  Pnav,
  ContentNav,
  TitleandImg,
  TitleNavContain,
  TitleNavIconContain,
  StyledSkillTitle,
  StyledSkillDot,
  PnavContent,
  ImgView,
  TitleProjectArea,
  TitlePara,
} from "../../components/Projects.style";

export default function Projects() {
  const MapAdd = () => {
    const mappedItems = projects.map((item) => (
      <TitleandImg className={item.class}>
        <TitleNav>
          <TitleNavContain>{item.name}</TitleNavContain>
          <TitleNavIconContain>
            {item.icon.map((icon) => (
              <StyledProjectImg src={icon} alt="Ícone" />
            ))}
          </TitleNavIconContain>
        </TitleNav>
        <ContentNav imgeUrl={item.img}>
          <TitleProjectArea>
            <ImgView
              alt="Click para abrir"
              src="project-icons/content--img/view.png"
            />
            <TitlePara>{item.desc}</TitlePara>
          </TitleProjectArea>
        </ContentNav>
      </TitleandImg>
    ));
    return mappedItems;
  };

  return (
    <>
      <PnavContent>
        <StyledSkillTitle>Projetos</StyledSkillTitle>
        <StyledSkillDot>.</StyledSkillDot>
      </PnavContent>

      <Pnav>{MapAdd()}</Pnav>
    </>
  );
}
