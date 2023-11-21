import styled from "styled-components";
export const StyledContainerInit = styled.section`
  margin-top: 190px;
`;
export const StyledContent = styled.div`
  display: flex;
  width: 1440px;
  z-index: 1;
  margin: 0 auto;
  justify-content: space-around;
  align-items: start;
`;

export const StyledLogoAvatar = styled.img``;

export const StyledText = styled.h3`
  padding-top: 50px;
  color: #fff;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 750px;
`;
export const StyledImgDivBtm = styled.div`
  width: 100%;
  height: 180px;
  background: #655638;
  position: absolute;
  z-index: -1;
  &::before {
    content: "";
    background-image: url("/img-section-top.png");
    width: 100%;
    height: 255px;
    position: absolute;
    top: -100px;
    z-index: -1;
  }
  &::after {
    content: "";
    background-image: url("/img-section-bottom.png");
    width: 100%;
    height: 145px;
    position: absolute;
    top: 180px;
    z-index: -1;
  }
`;
