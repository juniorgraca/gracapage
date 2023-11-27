
import { projects } from "../../types/projects";
import {
  StyledProjectImg,
  TitleNav,
  Pnav,
  ContentNav
} from "../../components/Projects.style";

export default function Projects() {

  const MapAdd = () => {
    
    const mappedItems = projects.map((item) => (
      <Pnav>
      <TitleNav>{item.name}
        {item.icon.map((icon, ) => (
            <StyledProjectImg src={icon} alt="Ícone" />
        ))}
        </TitleNav>
        <ContentNav>   {item.desc}</ContentNav>
     
      </Pnav>
  
    ));
    return mappedItems;
  };


  return (
    <>
  
      {MapAdd()}

 
    </>
  );
}
