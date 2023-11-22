import styled from "styled-components";

export const StyledSkillNav = styled.nav`
  background-color: #191b28;
`;

export const StyledSkillContent = styled.div`
  padding-top: 26px;
  width: 1440px;
  display: flex;
  margin: 0 auto;
`;

export const StyledSkillTitle = styled.h2`
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const StyledSkillDot = styled.p`
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const StyledIconsSkillContain= styled.div`
 width: 272px;
height: 205px;
border-radius: 0.3125rem;
border: 1px solid rgba(249, 194, 2, 0.30);
background: #232534;
display:flex;
align-items:center;
cursor: pointer;
justify-content:center; &:hover{
  background: rgba(249, 195, 2, 0.048);
}
`
export const StyledIconsSkill = styled.img`


`

export const StyledNavIcons= styled.div`
display: grid;
width: 1440px;
margin: 0 auto;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 18px 18px; 
  grid-template-areas: 
    ". . . . ."
    ". . . . ."; 
    

`