import {
  LogoImg,
  NavBarContent,
  MenuText,
  MenuLi,
  LogoArea,
  NavBarArea,
} from "../../components/NavBar.style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


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

  interface NavBarContentStyles {
    position: 'fixed' | 'relative'; 
    backgroundColor: string;
    backdropFilter: string;
 
  }

  const stylesArray:NavBarContentStyles = {
    position: navbar ? "fixed" : "relative",
    backgroundColor: navbar ? "#rgba( 255, 255, 255, 0.35 )" : "",
    backdropFilter: "blur( 23.5px )",
    
  
  };

  return (
    <NavBarContent style={stylesArray}>
      <NavBarArea>
        <MenuText>
          <MenuLi><Link to ="/">Home</Link></MenuLi>
          <MenuLi><Link to ="/contact">Contact</Link></MenuLi>
          <MenuLi><Link to ="/portfolio">Portfolio</Link></MenuLi>
        </MenuText>

        <LogoArea>
      
          <LogoImg src={navbar ? "Logobar.svg" : "Logo.svg"} />
        </LogoArea>
        <LogoArea> </LogoArea>
      </NavBarArea>
    </NavBarContent>
  );
}

export default NavBar;
