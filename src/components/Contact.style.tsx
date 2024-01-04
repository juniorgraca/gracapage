import styled from "styled-components";
import { device } from "./Breakpoint";


export const StyledNavContent = styled.nav`
 @media ${device.mobile}{
  padding-top:30px;
}

@media ${device.mobileSmall}{
  padding-top:30px;
}

@media ${device.tablets}{
  padding-top:30px;
}
@media ${device.tabletsSmall}{
  padding-top:30px;
}
@media ${device.desktop}{
  padding-top:70px;
}

@media ${device.desktopSmall}{
  padding-top:70px;
}
`;
