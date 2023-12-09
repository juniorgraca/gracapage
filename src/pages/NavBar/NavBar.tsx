import {
  LogoImg,
  NavBarContent,
  MenuText,
  MenuLi,
  LogoArea,
  NavBarArea,
} from "../../components/NavBar.style";
import { useState, useEffect } from "react";
interface props {
  position: string;
  backgroundColor: string;
  backdropFilter: string;
}
function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY == 0) {
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

  const stylesArray: props = {
    position: navbar ? "fixed" : "relative",
    backgroundColor: navbar ? "#rgba( 255, 255, 255, 0.35 )" : "",
    backdropFilter: "blur( 23.5px )",
  };

  return (
    <NavBarContent style={stylesArray}>
      <NavBarArea>
        <MenuText>
          <MenuLi>Home</MenuLi>
          <MenuLi>Contact</MenuLi>
          <MenuLi>Portfolio</MenuLi>
        </MenuText>

        <LogoArea>
          {" "}
          <LogoImg src={navbar ? "Logobar.svg" : "Logo.svg"} />
        </LogoArea>
        <LogoArea> </LogoArea>
      </NavBarArea>
    </NavBarContent>
  );
}

export default NavBar;
