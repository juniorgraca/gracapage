import styled from "styled-components";
export const StyledContainerInit = styled.section`
  margin-top: 100px;
  width: 100%;
  height: 448px;
  z-index: -1;
  background-image: url("union.png");
`;

export const StyledSection = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  &::before {
    content: "";
    background-color: #252738;
    height: 255px;
    width: 300px;
    z-index: 1;
    right: 40px;
    position: absolute;
    display: flex;
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
`;

export const StyledPictureContain = styled.div`
  display: flex;
  align-items: end;
`;

export const StyledPicture = styled.img``;

export const StyledTextArea = styled.div`
  margin-left: 30px;
  width: 65%;
`;

export const StyledTextTitle = styled.h2`
  overflow: hidden;
  margin-top: 60px;
  color: #232534;
  text-overflow: ellipsis;
  font-family: Archivo;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyledTextDesc = styled.h3`
  margin-top: 14px;
  color: #e6e6e6;
  font-family: Archivo;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1875rem;
`;

export const StyledIconSocial = styled.img``;

export const StyledIconSocialContain = styled.div`
  border-radius: 5px;
  border: 1px solid #f9c202;
  background: #191b28;
  width: 92px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffe279;
    background: #34353a;
  }
`;
export const StyledIconArea = styled.div`
  margin-top: 21px;
  display: flex;
  gap: 14px;
  justify-content: center;
`;
