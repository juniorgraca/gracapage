import styled from "styled-components";
import { device } from "./Breakpoint";

export const NavBarContent = styled.div`
 @media ${device.mobile}{
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 5;
}

@media ${device.mobileSmall}{
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 5;
}

@media ${device.tablets}{
  width: 100%;
  height: 110px;
  display: flex;
  z-index: 5;
}
@media ${device.tabletsSmall}{
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 5;
 
}
@media ${device.desktop}{
  width: 100%;
  height: 70px;
  display: flex;
  z-index: 5;
}

@media ${device.desktopSmall}{
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 5;
}


`;

export const NavBarArea = styled.div`
@media ${device.mobile}{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}



@media ${device.mobileSmall}{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}

@media ${device.tablets}{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}
@media ${device.tabletsSmall}{
  display: flex;
 
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}
@media ${device.desktop}{
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

}

@media ${device.desktopSmall}{
  display: flex;
  width: 1440px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}
 a{
  @media ${device.mobile}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  padding-left:25px;
  cursor: pointer;
  line-height: normal;
  text-decoration:none;
  &:hover {
    color: #f9c202;
  }
}



@media ${device.mobileSmall}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-left:25px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}

@media ${device.tablets}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}
@media ${device.tabletsSmall}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
  
}
@media ${device.desktop}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }

}

@media ${device.desktopSmall}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}
 }
`;

export const LogoImg = styled.img`
@media ${device.mobile}{
  display: flex;
  width:100px;
  height:50px;
  padding-top:10px;
  margin-left:0px;
  margin-bottom:43px;
}

@media ${device.mobileSmall}{
  display: flex;
  width:100px;
  height:50px;
  padding-top:10px;
  margin-left:0px;
  margin-bottom:46px;

}

@media ${device.tablets}{
  display: flex;
  width:400px;

}
@media ${device.tabletsSmall}{
  display: flex;
  width:500px;

}
@media ${device.desktop}{
  display: flex;
  width:500px;
}

@media ${device.desktopSmall}{
  display: flex;
  width:500px;
}
`;

export const LogoArea = styled.div`
@media ${device.mobile}{
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
}

@media ${device.mobileSmall}{
 
}

@media ${device.tablets}{
 
}
@media ${device.tabletsSmall}{

}
@media ${device.desktop}{
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: center;
  padding-top:30px;

}

@media ${device.desktopSmall}{
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: center;
}

  
`;
export const MenuText = styled.ul`
@media ${device.mobile}{
  list-style: none;
  width: 100%;
  margin-top:40px;
  position:absolute;
  text-align:center;
 
}

@media ${device.mobileSmall}{
  list-style: none;
  width: 100%;
  position:absolute;
  text-align:center;
}

@media ${device.tablets}{
  list-style: none;
  width: 100%;
  position:absolute;
}
@media ${device.tabletsSmall}{
  list-style: none;
  width: 100%;
  position:absolute;
}
@media ${device.desktop}{
  text-align:start;
  margin-top:0px;
  list-style: none;
  width: 33%;
  position:static;

}

@media ${device.desktopSmall}{
  list-style: none;
  width: 33%;
}


`;

export const MenuLi = styled.li`
@media ${device.mobile}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  padding-left:25px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}



@media ${device.mobileSmall}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-left:25px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}

@media ${device.tablets}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}
@media ${device.tabletsSmall}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
  
}
@media ${device.desktop}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }

}

@media ${device.desktopSmall}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  padding-right: 15px;
  cursor: pointer;
  line-height: normal;
  &:hover {
    color: #f9c202;
  }
}


`;