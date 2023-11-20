import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #f5dede;
`;

export const StyledDiv = styled.div`
  background-color: red;
`;

export const StyledImgDivBtm = styled.div`
  margin-top: 300px;
  width: 100%;
  height: 350px;
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
    z-index: 1;
  }
  &::after {
    content: "";
    background-image: url("/img-section-bottom.png");
    width: 100%;
    height: 145px;
    position: absolute;
    top: 300px;
    z-index: 1;
  }
`;
