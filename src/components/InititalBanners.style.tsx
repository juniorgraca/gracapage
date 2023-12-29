import styled from "styled-components";
import { device } from "./Breakpoint";

interface props {
  imageUrl: string;
}

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


export const StyledNavBanner = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
`;
export const StyledBtn = styled.button`
  margin: 0 auto;
  margin-bottom:60px;
  border-radius: 20px;
  background: #f9c202;
  border: none;
  width: 162px;
  height: 36px;
  display: block;
  &:hover {
    background: #eece5b;
    color: #fff;
  }
`;

export const StyledBtnP = styled.p`
  color: #232534;
  font-family: MonaSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;

  &:hover {
    color: #424242;
  }
`;

export const StyledCarrosel = styled.div<props>`
@media ${device.mobile}{
  height: 150px;
 
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;

  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
}



@media ${device.mobileSmall}{
  height: 350px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
}

@media ${device.tablets}{
  height: 450px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
}
@media ${device.tabletsSmall}{
  height: 550px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
}
@media ${device.desktop}{
  height: 650px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
}

@media ${device.desktopSmall}{
  height: 650px;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer;
  align-items: start;
  display: flex;
}


`;

export const StyledTextBanner = styled.div`
  width: 100%;

  height: fit-content;
  display: flex;
  justify-content: center;
`;
export const StyledIcon = styled.img`

  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
`;
export const StyledIconText = styled.div`

  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "."
    ".";
`;
export const StyledText = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledTexth3 = styled.h3`
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
