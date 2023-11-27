import styled from "styled-components";
import { keyframes } from "styled-components";

export const StyledSkillNav = styled.nav`
  background-color: #191b28;
  padding-bottom:96px;
  padding-top:96px;
`;

export const StyledSkillContent = styled.div`
  padding-top: 26px;
  width: 1440px;
  display: flex;
  margin: 0 auto;
`;

export const StyledSkillTitle = styled.h2`
  overflow: hidden;
  color: #e6e6e6;
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

export const StyledContainSec = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  gap: 15px;
`;
export const StyledIconNav = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
`;

const breatheAnimation = keyframes`

  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledIconsSkillContain = styled.div`
  width: 130px;
  height: 150px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
`;
export const StyledIconsSkill = styled.img``;
export const StyledContentText = styled.div`
  margin-left: 30px;
`;

export const StyledContenPSkills = styled.p`
  margin-top: 10px;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledContentTitle = styled.h2`
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
