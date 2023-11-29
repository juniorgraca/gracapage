import {
  LogoImg,
  NavBarContent,
  MenuText,
  MenuLi,
} from "../../components/NavBar.style";
import {useState,useEffect} from 'react';


function NavBar() {
  const [navbar, setNavbar]= useState<boolean>(false)

  useEffect(()=>{
    const scrollListernet = ()=>{
      if (window.scrollY >80){
        setNavbar(true) 
        }
        else{
          setNavbar(false)
      }
    };
    window.addEventListener("scroll", scrollListernet);
    return ()=>{
      window.removeEventListener("scroll",scrollListernet);
    }
  },[]);
  return (
    <>
      <NavBarContent>
        <MenuText>
          {navbar ? (<div> Tiau </div>): (<div> ALo </div>)}
          <MenuLi>Home</MenuLi>
          <MenuLi>Contact</MenuLi>
          <MenuLi>Portfolio</MenuLi>
        </MenuText>

        <LogoImg src="Logo.svg" />
        <LogoImg width="300px" height="50px" src="" />
      </NavBarContent>
    </>
  );
}

export default NavBar;
