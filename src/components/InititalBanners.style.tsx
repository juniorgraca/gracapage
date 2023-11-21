import styled from "styled-components";

interface props {
  imageUrl: string;
}

export const StyledNavContent = styled.nav`

  margin-top: 40px;
`
export const StyledNavBanner = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
`;
export const StyledBtn = styled.button`
  margin:0 auto;
  margin-bottom:30px;
  border-radius: 20px;
  background: #655638;
  border: none;
  width: 162px;
  height: 36px;
  flex-shrink: 0;
  display:block;

`;

export const StyledBtnP = styled.p`
  color: #e8e8e8;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;&:hover{
    color: #a7a7a7;
  
  }
`;

export const StyledCarrosel = styled.div<props>`
  height: 545px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  margin: 0 0 0 3px;
  transition: 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
  padding-top: 15px;
`;

export const StyledIcon = styled.img`
  
  padding-left: "20px";
  display: flex;
`;
