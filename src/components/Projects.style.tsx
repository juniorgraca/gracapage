import styled from "styled-components";

interface props {
  imgeUrl: string;
}

export const StyledProjectImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const Pnav = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3 0px;
`;

export const TitleandImg = styled.div`
  background-color: blue;
  height: 250px;
  width: 450px;

  &.container4 {
    margin-top: 70px;
    width: 1440px;
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
  font-weight: 400;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const ContentNav = styled.div<props>`
  background-image: url("${(props) => props.imgeUrl}");
  width: 100%;
  height: 100%;
`;
