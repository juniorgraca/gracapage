import {
  LogoImg,
  NavBarContent,
  MenuText,
  MenuLi,
  LogoArea,
  NavBarArea
} from "../../components/NavBar.style";
import { useState, useEffect } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  useEffect(() => {
    const scrollListener = () => {
      if  (window.scrollY) {
        setNavbar(false);
        
      } else {
        setNavbar(true);
   
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const stylesArray = {
    position: navbar ? "relative" : "fixed",
    backgroundColor: navbar ? "#191b28" : "#191b28b9",
  };

  return (
    <NavBarContent style={stylesArray}>

  <NavBarArea>
      <MenuText>
        <MenuLi>Home</MenuLi>
        <MenuLi>Contact</MenuLi>
        <MenuLi>Portfolio</MenuLi>
      </MenuText>

      <LogoArea> <LogoImg src={navbar ? "Logo.svg" : "Logobar.svg"}  /></LogoArea>
      <LogoArea> </LogoArea>
    
      </NavBarArea>
    </NavBarContent>
  );
}

export default NavBar;
