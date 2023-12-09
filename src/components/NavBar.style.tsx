import styled from "styled-components";

export const NavBarContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 5;
`;

export const NavBarArea = styled.div`
  display: flex;
  width: 1440px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  display: flex;
`;

export const LogoArea = styled.div`
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: center;
`;
export const MenuText = styled.ul`
  list-style: none;
  width: 33%;
`;

export const MenuLi = styled.li`
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
`;
