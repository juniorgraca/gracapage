
import styled from "styled-components";

interface props {
  imageUrl:string;

 }

export const StyledNavBanner = styled.nav`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
`;
export const StyledBtn = styled.button`
  margin-top: 100px;
  border-radius: 20px;
  background: #655638;
  border: none;
  width: 162px;
  height: 36px;
  flex-shrink: 0;
`;

export const StyledBtnP = styled.p`
  color: #e8e8e8;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledCarrosel = styled.div <props>`
  height: 545px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  margin: 0 0 0 14px;
  transition: 0.4s cubic-bezier(0.455,0.03,0.515,0.955);
  cursor:pointer;
`;
