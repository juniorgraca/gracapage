import styled from "styled-components";
import { device } from "./Breakpoint";

interface props {
  imgeUrl: string;
}


export const PnavContent = styled.div`
@media ${device.mobile}{
  display: flex;

  margin: 96px auto 3px;
}



@media ${device.mobileSmall}{
  display: flex;

  margin: 96px auto 3px;
}

@media ${device.tablets}{
  display: flex;
  margin: 96px auto 3px;
}
@media ${device.tabletsSmall}{
  display: flex;
  width: 992px;
  margin: 96px auto 3px;
}
@media ${device.desktop}{
  display: flex;
  width: 1200px;
  margin: 96px auto 3px;

}

@media ${device.desktopSmall}{
  display: flex;
  width: 1440px;
  margin: 96px auto 3px;
}

`;

export const StyledProjectImg = styled.img`

  @media ${device.mobile}{
    width: 15px;
  height: 15px;
  margin-left: 3px;
}



@media ${device.mobileSmall}{
 
}

@media ${device.tablets}{
 
}
@media ${device.tabletsSmall}{

}
@media ${device.desktop}{
  width: 20px;
  height: 20px;
  margin-left: 10px;

}

@media ${device.desktopSmall}{
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

`;

export const StyledSkillTitle = styled.h2`
  overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left:15px;
`;

export const StyledSkillDot = styled.p`
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Pnav = styled.section`
@media ${device.mobile}{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
 gap:1.9px;
}



@media ${device.mobileSmall}{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

@media ${device.tablets}{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap:0px;
}
@media ${device.tabletsSmall}{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap:0px;
}
@media ${device.desktop}{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

}

@media ${device.desktopSmall}{
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
 
`;

export const TitleandImg = styled.div`
@media ${device.mobile}{
  height: 250px;
  width: 100%;

  padding-bottom: 60px;

  &.container4 {
    
    width: 100%;
    height: 250px;
 
  }
}



@media ${device.mobileSmall}{
  height: 250px;
  width: 100%;
 
  padding-bottom: 60px;

  &.container4 {
    
    width: 100%;
    height: 250px;
 
  }
}

@media ${device.tablets}{
  height: 250px;
  width: 50%;
  padding: 10px 10px;
  padding-bottom: 60px;

  &.container4 {

    width: 50%;
    height: 250px;
 
  }
}
@media ${device.tabletsSmall}{

}
@media ${device.desktop}{
  height: 385px;
  width: 33%;
  &.container4 {
    margin-top: 70px;
    width: 100%;
    height: 400px;
  }

}

@media ${device.desktopSmall}{
  height: 385px;
  width: 33%;
  &.container4 {
    margin-top: 70px;
    width: 100%;
    height: 400px;
  }
}
  
`;

export const TitleNav = styled.div`
@media ${device.mobile}{
 
  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}



@media ${device.mobileSmall}{
  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
}

@media ${device.tablets}{
 
  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
}
@media ${device.tabletsSmall}{

  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}
@media ${device.desktop}{
 
  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

}

@media ${device.desktopSmall}{

  display: flex;
  width: 100%;
  height: 380px;
  color: #15161f;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 45px;
  background-color: #f9c202;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}

`;

export const ContentNav = styled.div<props>`
  background-image: url("${(props) => props.imgeUrl}");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
`;

export const TitleNavContain = styled.div``;
export const ImgView = styled.img`
  display: flex;
  margin: 0 auto;

`;
export const TitleNavIconContain = styled.div`
`
export const TitleProjectArea = styled.div`
  color: #f9c202;
  text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.658);
  width: 100%;
  height: 100%;
  cursor: pointer;&:hover{
    backdrop-filter: blur(23.5px);

  }


`;
export const Link = styled.a`

`
export const TitlePara = styled.p`
  color: #f9c202;
  font-family: MonaSans;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.658);
`;
