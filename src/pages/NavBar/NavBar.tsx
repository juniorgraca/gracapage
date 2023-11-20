import {
  LogoImg,
  NavBarContent,
  MenuText,
  MenuLi,
} from "../../components/NavBar.style";

function NavBar() {
  return (
    <>
      <NavBarContent>
        <MenuText>
          <MenuLi>Home</MenuLi>
          <MenuLi>Contact</MenuLi>
          <MenuLi>Portfolio</MenuLi>
        </MenuText>

        <LogoImg width="300px" height="50px" src="Logo.svg" />
      </NavBarContent>
    </>
  );
}

export default NavBar;
