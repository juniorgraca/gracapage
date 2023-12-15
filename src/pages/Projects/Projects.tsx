import { useState
 } from "react";
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
  TitlePara,Link
} from "../../components/Projects.style";

export default function Projects() {

  const [witdh1, setWidth1] = useState<boolean>(true);
  const [witdh2, setWidth2] = useState<boolean>(true);
  const [witdh3, setWidth3] = useState<boolean>(true);
  const [witdh4, setWidth4] = useState<boolean>(true);

  const handleMouseAdd = (index:number) =>{
    if (index=== 0){
      setWidth1(false)
    } else if(index=== 1){
      setWidth2(false)
    }else if(index=== 2){
      setWidth3(false)
    }else if(index=== 3){
      setWidth4(false)
    }

  }
  
  const HandleMouseLeave = (index:number)=>{
    if (index=== 0){
      setWidth1(true)
    } else if(index=== 1){
      setWidth2(true)
    }else if(index=== 2){
      setWidth3(true)
    }else if(index=== 3){
      setWidth4(true)
    }
  }



  const stylesArray = [
    witdh1
    ? {
      opacity: "0",
    }
  : {
      opacity: "1",
      
    },

    witdh2
    ? {
      opacity: "0",
    }
  : {
      opacity: "1",
    },

    witdh3
    ? {
        opacity: "0",
      }
    : {
        opacity: "1",
      },

    witdh4
      ? {
        opacity: "0",
        }
      : {
          opacity: "1",
        },
  ];

  const MapAdd = () => {
    const mappedItems = projects.map((item, index) => (
  
      <TitleandImg onMouseEnter={()=>handleMouseAdd(index)} onMouseLeave={()=>HandleMouseLeave(index)} className={item.class}>
        <TitleNav >
          <TitleNavContain>{item.name}</TitleNavContain>
          <TitleNavIconContain >
            {item.icon.map((icon) => (
              <StyledProjectImg src={icon} alt="Ícone" />
            ))}
          </TitleNavIconContain>
        </TitleNav>
        <ContentNav imgeUrl={item.img}>
          <TitleProjectArea style={stylesArray[index]}  >
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <ImgView  key={index}
              alt="Click para abrir"
              src="project-icons/content--img/view.png"
            />
            </Link>
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
