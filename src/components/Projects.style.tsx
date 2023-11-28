import styled from "styled-components";

interface props {
  imgeUrl: string;
}

export const PnavContent = styled.div`

  display:flex;
  width:1440px;
  margin: 96px auto 3px;
`

export const StyledProjectImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left:10px;
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

export const Pnav = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap:7px;
`;

export const TitleandImg = styled.div`

  background-color: blue;
  height: 385px;
  width: 33%;
  

  &.container4 {
    margin-top: 70px;
    width: 100%;
    height: 400px;
  }
`;

export const TitleNav = styled.div`
  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

`;

export const ContentNav = styled.div<props>`
  background-image: url("${(props) => props.imgeUrl}");
  width: 100%;
  height: 100%;

`;

export const TitleNavContain = styled.div`

`;

export const TitleNavIconContain = styled.div`

`;