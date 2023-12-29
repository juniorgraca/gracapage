import styled from "styled-components";
import { device } from "./Breakpoint";

export const StyledContainerInit = styled.section`
@media ${device.mobile}{
  margin-top: 30px;
  width: 100%;
  max-width:480px;

  z-index: -1;
  background-image: url("union.png");
  background-color:blue;
}
@media ${device.mobileSmall}{
  margin-top: 30px;
  width: 100%;
  max-width:768px;
  height: auto;;
  z-index: -1;
  background-image: url("union.png");
  background-color:blue;
}

@media ${device.tablets}{
  margin-top: 30px;
  width: 100%;
  max-width:992px;
  height: auto;;
  z-index: -1;
  background-image: url("union.png");
  background-color:blue;
}

@media ${device.tabletsSmall}{
 margin-top: 10px;
  width: 100%;
  max-width:1200px;
  height: 448px;
  z-index: -1;
  background-image: url("union.png");
}

@media ${device.desktop}{
  margin-top: 100px;
  width: 100%;
  max-width:1920px;
  height: 448px;
  z-index: -1;
  background-image: url("union.png");
}



@media ${device.desktopSmall}{
  margin-top: 100px;
  width: 100%;
  max-width:100%;
  height: 448px;
  z-index: -1;
  background-image: url("union.png");
}

`;



export const StyledSection = styled.div`

  @media ${device.mobile}{
  height: 100%;
  background-image: url("union.png");
}
@media ${device.tabletsSmall}{
  width: 992px;
  margin: 0 auto;
  height: 100%;
  display: flex;&::before {
    content: "";
    background-color: #252738;
    height: 120px;
    width: 200px;
    z-index: 1;
    right: 40px;
    position: absolute;
    display: flex;
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;}
  
}
@media ${device.desktop}{
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  &::before {
    content: "";
    background-color: #252738;
    height: 120px;
    width: 200px;
    z-index: 1;
    right: 40px;
    position: absolute;
    display: flex;
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;}
}


@media ${device.desktopSmall}{
  width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  &::before {
    content: "";
    background-color: #252738;
    height: 255px;
    width: 220px;
    z-index: 1;
    right: 20px;
    position: absolute;
    display: flex;
    -webkit-border-bottom-right-radius: 50px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius-bottomright: 50px;
    -moz-border-radius-bottomleft: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
}
`;



export const Link = styled.a`

`
export const StyledPictureContain = styled.div`
@media ${device.mobile}{
  display: flex;
  justify-content:center;
}
@media ${device.tabletsSmall}{
  display: flex;
  align-items: end;
  margin: 0 auto;
}
@media ${device.desktop}{
  display: flex;
  align-items: end;
  margin: 0 auto;
}

@media ${device.desktopSmall}{
  display: flex;
  align-items: end;
}
  
`;

export const StyledPicture = styled.img`
@media ${device.mobile}{
  padding-top:20px;
  width:20%;
}
@media ${device.tabletsSmall}{
  width:80%;
  margin-bottom:-3px;
}
@media ${device.desktop}{
  width:93%;
  margin-bottom:-3px;
}

@media ${device.desktopSmall}{
  width:100%;
  margin-bottom:-3px;
}
`;

export const StyledTextArea = styled.div`
@media ${device.mobile}{
  margin-top:-1px;
  background-color:#191b28;
}

@media ${device.tabletsSmall}{
  margin-left: 30px;
  width: 65%;
  background-color:transparent;
}
@media ${device.desktop}{
  margin-left: 30px;
  width: 72%;
}
@media ${device.desktopSmall}{
  margin-left: 30px;
  width: 75%;

}

`;

export const StyledTextTitle = styled.h2`
 
  @media ${device.mobile}{
    color: #f9c202;
    text-align:center;
    font-size:1.1rem;
    padding-top:10px;
  }
  @media ${device.tabletsSmall}{
    overflow: hidden;
  color: #232534;
  text-overflow: ellipsis;
  font-family: Archivo;
  font-size: 1.35rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align:justify;
  margin-top: 120px;
  padding-left:15px;
}

@media ${device.desktop}{
  overflow: hidden;
  color: #232534;
  text-overflow: ellipsis;
  font-family: Archivo;
  font-size: 1.35rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align:justify;
  margin-top: 120px;

}
@media ${device.desktopSmall}{
  overflow: hidden;
  margin-top: 120px;
  color: #232534;
  text-overflow: ellipsis;
  font-family: Archivo;
  font-size: 1.24rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
`;

export const StyledTextDesc = styled.h3`
 
  @media ${device.mobile}{
  color: #e6e6e6;
  font-family: Archivo;
  font-size: 0.87rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
  text-align:justify;
  padding: 10px;
}
@media ${device.tablets}{
  color: #e6e6e6;
  font-family: Archivo;
  font-size: 0.87rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  text-align:justify;
  padding: 10px;
  
}
@media ${device.tabletsSmall}{
  margin-top: 0px;
  color: #e6e6e6;
  font-family: Archivo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1875rem;
  width:600px;
  
  
}
@media ${device.desktop}{
  margin-top: 0px;
  color: #e6e6e6;
  font-family: Archivo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1875rem;
  width:100%;
}
@media ${device.desktopSmall}{
  margin-top: 0px;
  color: #e6e6e6;
  font-family: Archivo;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1875rem;
  width:100%;
}

`;

export const StyledIconSocial = styled.img`
@media ${device.mobile}{
  width: 55%;
  height: min-content;
}
@media ${device.mobileSmall}{
  width: 55%;
  height: min-content;
}

@media ${device.tabletsSmall}{
  width: 55%;
  height: min-content;

}
@media ${device.desktop}{
  width: 55%;
  height: auto;

}
@media ${device.desktopSmall}{
  width: 45%;
  height: auto;
}`;

export const StyledIconSocialContain = styled.div`

@media ${device.mobile}{
  border-radius: 5px;
  border: 1px solid #f9c202;
  background: #191b28;
  width: 34px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffe279;
    background: #34353a;
  }
}
@media ${device.mobileSmall}{
  border-radius: 5px;
  border: 1px solid #f9c202;
  background: #191b28;
  width: 44px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffe279;
    background: #34353a;
  }
}
@media ${device.tablets}{
  border-radius: 5px;
  border: 1px solid #f9c202;
  background: #191b28;
  width: 54px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffe279;
    background: #34353a;
  }
 
}
@media ${device.tabletsSmall}{
  border-radius: 5px;
  border: 1px solid #f9c202;
  background: #191b28;
  width: 54px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffe279;
    background: #34353a;
  }
 
}

@media ${device.desktopSmall}{
  border-radius: 5px;
  border: 1px solid #f9c202;
  background: #191b28;
  width: 92px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffe279;
    background: #34353a;
  }
}
 
`;
export const StyledIconArea = styled.div`
@media ${device.mobile}{
  margin-top: 23px;
  display: flex;
  gap: 14px;
  justify-content: center;
}
@media ${device.mobileSmall}{
  margin-top: 21px;
  display: flex;
  gap: 14px;
  justify-content: center;
}
@media ${device.tablets}{
display: flex;
gap: 14px;
justify-content: center;
}

@media ${device.tabletsSmall}{
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top:0px;

}

@media ${device.desktop}{
display: flex;
gap: 14px;
justify-content: center;
margin-top:0px;
}

@media ${device.desktopSmall}{
display: flex;
gap: 14px;
justify-content: center;
margin-top:0px;
}

`;
