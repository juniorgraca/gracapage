import {
  StyledFooter,
  StyledTextYellow,
  StyledFooterContent,
  StyledLogoIcon,
  StyledTexth3White,
  StyledTextReserved,
  StyledTextReservedYellow,
  StyledLogoJr,
} from "../../components/Footer.styles";

import styledLogo from "/icon-skills/STYLEDCOMP-ICON.png";
import reactLogo from "/icon-skills/REACT-ICON.png";
import logoJr from "/Logo.svg";


function Footer() {
  return (
    <div>
      <StyledFooter>
        <StyledFooterContent>
          <StyledTextReserved>
          © 2023<StyledTextReservedYellow>Junior Graça.</StyledTextReservedYellow>  Todos os direitos reservados.
          </StyledTextReserved>
          <StyledTexth3White>
            <StyledLogoJr width="265px" height="47px" src={logoJr}/>
          </StyledTexth3White>
          <StyledTextYellow>
            <StyledTextReserved>Tecnologia Usadas:</StyledTextReserved>
            <StyledLogoIcon width="18px" height="17px" src={reactLogo} />
            <StyledLogoIcon width="32px" height="15px"  src={styledLogo} />
          </StyledTextYellow>
        </StyledFooterContent>
      </StyledFooter>
    </div>
  );
}

export default Footer;
