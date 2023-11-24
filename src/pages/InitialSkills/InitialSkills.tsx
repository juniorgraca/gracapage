import { useState } from "react";

import {
  StyledSkillContent,
  StyledSkillDot,
  StyledSkillNav,
  StyledSkillTitle,
  StyledIconsSkill,
  StyledIconsSkillContain,
  StyledContainSec,
  StyledIconNav,
  StyledContentText,
  StyledContenPSkills,
  StyledContentTitle,
} from "../../components/Skills.style";

import { skills } from "../../types/skills";

function InitialSkills() {
  const [indexItem, setIndexItem] = useState<number|null>(1);
  const [textMouse, setTextMouse] = useState<boolean>(false)
  const foundHover = skills.find((index) => index.id === indexItem);



  const hoverAdd = (id: number) => {
    if (id ===  id ) {
      setIndexItem(id);
    (setTextMouse(true))
   
    }
  };
  const hoverRemove = () => { 
    (setTextMouse(false))
    setIndexItem(null);
  };
  return (
    <>
      <StyledSkillNav>
        <StyledSkillContent>
          <StyledSkillTitle>Habilidades</StyledSkillTitle>
          <StyledSkillDot>.</StyledSkillDot>
        </StyledSkillContent>
        <StyledIconNav>
          <StyledContainSec>
            {skills.map((item) => (
              <StyledIconsSkillContain
                key={item.id}
                onMouseEnter={() => hoverAdd(item.id)}
                onMouseLeave={() =>hoverRemove()}
              >
                <StyledIconsSkill
                  src={item.icon}
                  width={item.width}
                  height={item.height}
                />
                <StyledSkillTitle></StyledSkillTitle>
       
              </StyledIconsSkillContain> 

            ))}        
          </StyledContainSec>
          <StyledContentText>
            <StyledContentTitle>{textMouse ?foundHover?.title : 'Coloque o cursor do mouse no Card para ler sobre cada item'}</StyledContentTitle>
        
            <StyledContenPSkills> {foundHover?.descr}</StyledContenPSkills>
          </StyledContentText>
 
        </StyledIconNav>
      </StyledSkillNav>
    </>
  );
}

export default InitialSkills;
