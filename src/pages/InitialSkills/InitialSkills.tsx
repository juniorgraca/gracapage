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
} from "../../components/Skills.style";

import { skills } from "../../types/skills";

function InitialSkills() {
  const [indexItem, setIndexItem] = useState<number>();
  const [selectedId, setSelectedId] = useState<number>();

  const foundHover = skills.find((item, index) => index === indexItem);

  const hoverAdd = (id: number) => {
    if (id >= 0 && id <= 12) {
      setIndexItem(id);
      console.log(indexItem);
    }
  };
  const hoverRemove = () => {
    setIndexItem(0);
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
                onMouseDown={() => hoverRemove()}
              >
                <StyledIconsSkill
                  src={item.icon}
                  width={item.width}
                  height={item.height}
                />
                <StyledSkillTitle>{item.id}</StyledSkillTitle>
              </StyledIconsSkillContain>
            ))}
          </StyledContainSec>
        </StyledIconNav>
      </StyledSkillNav>
    </>
  );
}

export default InitialSkills;
