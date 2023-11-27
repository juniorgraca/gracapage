import {
  StyledFooter,
  StyledTextYellow,
  StyledFooterContent,
  StyledLogoIcon,
  StyledTexth3White,
} from "../../components/Footer.styles";

import styledLogo from "/icon-skills/STYLEDCOMP-ICON.png";
import reactLogo from "/icon-skills/REACT-ICON.png";
import logoJr from "/Logo.svg";

function Footer() {
  return (
    <div>
      <StyledFooter>
        <StyledFooterContent>
          <StyledTexth3White>
            <StyledLogoIcon src={logoJr}></StyledLogoIcon>
          </StyledTexth3White>
          <StyledTextYellow>
            <StyledTextYellow>Tecnologia Usadas:</StyledTextYellow>
            <StyledLogoIcon src={reactLogo} />
            <StyledLogoIcon src={styledLogo} />
          </StyledTextYellow>
        </StyledFooterContent>
      </StyledFooter>
    </div>
  );
}

export default Footer;
