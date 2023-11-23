
// import { useState } from 'react';
import { useState } from 'react';
import {
  StyledSkillContent,
  StyledSkillDot,
  StyledSkillNav,
  StyledSkillTitle,
  StyledIconsSkill,
  StyledIconsSkillContain,
  StyledNavIcons,
  StyledContainSec,
  StyledNavText
} from '../../components/Skills.style';



import { skills } from '../../types/skills';

function InitialSkills() {
  const [indexItem, setIndexItem] = useState<number>(4);
  const [selectedId, setSelectedId] = useState<number>();
  
  const foundHover = skills.find((item, index) => index === indexItem);


  }

  return (
    <>
      <StyledSkillNav>
        <StyledSkillContent>
          <StyledSkillTitle>Habilidades</StyledSkillTitle>
          <StyledSkillDot>.</StyledSkillDot>
        </StyledSkillContent>

        <StyledContainSec onMouseEnter={() =>handleMouseEnter()}>
          <StyledNavIcons>
            {skills.map((item) => (
                        
                <StyledIconsSkillContain  key={item.id}>
                
                
                <StyledIconsSkill
                    src={item.icon}
                    width={item.width}
                    height={item.height}
                   
                  />
                  
                </StyledIconsSkillContain >
       
          
              
            ))}
      
          </StyledNavIcons>
        
<StyledNavText></StyledNavText>     
          
        </StyledContainSec>
      
      </StyledSkillNav>
    </>
  );
}

export default InitialSkills;
