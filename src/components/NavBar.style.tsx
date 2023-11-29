import styled from "styled-components";

export const NavBarContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
 
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoImg = styled.img``;

export const MenuText = styled.ul`
  list-style: none;
`;
export const MenuLi = styled.li`
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor:pointer;
  line-height: normal;&:hover{
  color: #f9c202;
}
`;
