import styled from "styled-components";
export const StyledContainerInit = styled.section`
  display: flex;
  width: 1140px;
  margin: 0 auto;
`;
export const StyledLogoAvatar = styled.img`
  z-index: 4;
  padding-top: 30px;
`;
export const StyledText = styled.h3`
  color: #fff;
  font-family: MonaSans, Helvetica;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 130px;
  z-index: 5;
  margin-left: 30px;
`;
export const StyledImgDivBtm = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 200px;
  background: #655638;
  position: absolute;

  z-index: 10;
  &::before {
    content: "";
    background-image: url("/img-section-top.png");
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0px;
    z-index: 2;
  }
  &::after {
    content: "";
    background-image: url("/img-section-bottom.png");
    width: 100%;
    height: 145px;
    position: absolute;
    top: 200px;
    z-index: 3;
  }
`;
