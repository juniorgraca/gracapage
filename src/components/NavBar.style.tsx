import styled from "styled-components";
import { device } from "./Breakpoint";



export const NavBarContent = styled.div`
 
  @media ${device.mobile}{
  width: 100%;
  height: 65px;
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
  height: 100px;
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
  height: 100px;
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
  display: flex;
  width: 1440px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
@media ${device.mobile}{
  display: flex;
  width:100px;
  height:50px;
  margin-left:0px
}

@media ${device.mobileSmall}{
  display: flex;
  width:120px;

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

  display: flex;
  width: 33%;
  align-items: center;
  justify-content: center;
`;
export const MenuText = styled.ul`
  list-style: none;
  width: 33%;
`;

export const MenuLi = styled.li`
@media ${device.mobile}{
  color: #fff;
  display: inline;
  font-family: MonaSans;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  padding-left:5px;
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
  font-size: 0.9rem;
  padding-left:6px;
  font-style: normal;
  font-weight: 400;
  padding-right: px;
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
