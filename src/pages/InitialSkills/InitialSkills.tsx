import {
  StyledSkillContent,
  StyledSkillDot,
  StyledSkillNav,
  StyledSkillTitle,
  StyledIconsSkill,
  StyledIconsSkillContain,
StyledNavIcons

} from "../../components/Skills.style";
import { skills } from "../../types/skills";

function InitialSkills() {
  return (
    <>
      <StyledSkillNav>
        <StyledSkillContent>
          <StyledSkillTitle>Habilidades</StyledSkillTitle>
          <StyledSkillDot>.</StyledSkillDot>
          </StyledSkillContent>
          <StyledNavIcons>
          {skills.map((item) => (
            <StyledIconsSkillContain>
        <StyledIconsSkill key={item.id}  src={item.icon} width={item.width} height={item.height}/> 
        </StyledIconsSkillContain>
        ))}
</StyledNavIcons>
      </StyledSkillNav>
    </>
  );
}

export default InitialSkills;
