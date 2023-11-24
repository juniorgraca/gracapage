import styled from "styled-components";

interface props {
  imageUrl: string;
}

export const StyledNavContent = styled.nav`
  margin-top: 40px;
`;
export const StyledNavBanner = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 5px;
`;
export const StyledBtn = styled.button`
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 20px;
  background: #f9c202;
  border: none;
  width: 162px;
  height: 36px;
  display: block;
  &:hover {
    background: #eece5b;
    color: #fff;
  }
`;

export const StyledBtnP = styled.p`
  color: #232534;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #424242;
  }
`;

export const StyledCarrosel = styled.div<props>`
  height: 545px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  border-radius: 50px;
  background-position: center;
  background-size: cover;
  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
`;

export const StyledIconNav = styled.div`
  display: flex;
  border-radius: 50px;
  margin-top: -0.6px;
  background: linear-gradient(
    180deg,
    #000 -32.66%,
    rgba(142, 111, 0, 0) 92.96%
  );
  width: 100%;
  justify-content: center;
  height: 190px;
`;
export const StyledIcon = styled.img`
  display: flex;
  margin-top: 10px;
`;
