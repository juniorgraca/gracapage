import {
  StyledSkillContent,
  StyledSkillDot,
  StyledSkillNav,
  StyledSkillTitle,
} from "../../components/Skills.style";
function InitialSkills() {
  return (
    <>
      <StyledSkillNav>
        <StyledSkillContent>
          <StyledSkillTitle>Habilidades</StyledSkillTitle>
          <StyledSkillDot>.</StyledSkillDot>
        </StyledSkillContent>
      </StyledSkillNav>
    </>
  );
}

export default InitialSkills;
