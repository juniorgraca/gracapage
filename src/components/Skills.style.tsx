import styled from "styled-components";
import { keyframes } from "styled-components";
import { device } from "./Breakpoint";

export const StyledSkillNav = styled.nav`
  margin: 0 auto;
  background-color: #191b28;
  padding-bottom:56px;
  padding-top:56px;
`;

export const StyledSkillContent = styled.div`
@media ${device.mobile}{
  padding: 0px 15px;
  display: flex;
  margin: 0 auto;
}

@media ${device.mobileSmall}{
  padding: 0px 15px;
  display: flex;
  margin: 0 auto;
}

@media ${device.tablets}{
  padding: 0px 15px;
  display: flex;
  margin: 0 auto;
}
@media ${device.tabletsSmall}{
 
  padding: 0px 15px;
  display: flex;
  margin: 0 auto;
}
@media ${device.desktop}{
  width: 1200px;
  padding: 0px 15px;
  display: flex;
  margin: 0 auto;

}

@media ${device.desktopSmall}{
  width: 1440px;
  display: flex;
  margin: 0 auto;
}

`;

export const StyledSkillTitle = styled.h2`
 
  @media ${device.mobile}{
    overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.mobileSmall}{

  overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.tablets}{

  overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.tabletsSmall}{

  overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.desktop}{
  
  overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.desktopSmall}{
  overflow: hidden;
  color: #e6e6e6;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

`;

export const StyledSkillDot = styled.p`
 @media ${device.mobile}{
    overflow: hidden;
    color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.mobileSmall}{
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.tablets}{
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.tabletsSmall}{
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.desktop}{
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.desktopSmall}{
  overflow: hidden;
  color: #f9c202;
  text-overflow: ellipsis;
  font-family: MonaSans;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;}

`;

export const StyledContainSec = styled.section`
@media ${device.mobile}{
  margin: 0px 5px;
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr ;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . . "
    ". . . ";
  gap:5px;
}

@media ${device.mobileSmall}{
  margin: 0px 10px;
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  gap:5px;
}

@media ${device.tablets}{
  margin: 0px 5px;
  padding: 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  gap: 12px;
}
@media ${device.tabletsSmall}{
  margin: 0px 5px;
  padding: 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  gap: 15px;
}
@media ${device.desktop}{
  margin: 0px 5px;
  padding: 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  gap: 15px;
}

@media ${device.desktopSmall}{
  margin: 0px 10px;
  padding: 10px 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  gap: 15px;
}
 
`;
export const StyledIconNav = styled.div`
 @media ${device.mobile}{
  width: auto;
  display: flex;
  margin: 0 auto;
}



@media ${device.mobileSmall}{
  width: auto;
  display: flex;
  margin: 0 auto;
}

@media ${device.tablets}{
  width: auto;
  display: flex;
  margin: 0 auto;
}
@media ${device.tabletsSmall}{
  width: auto;
  display: flex;
  margin: 0 auto;
}
@media ${device.desktop}{
  width:1200px;
  display: flex;
  margin: 0 auto;
  
}

@media ${device.desktopSmall}{
  width: 1440px;
  display: flex;
  margin: 0 auto;
}
`;

const breatheAnimation = keyframes`

  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledIconsSkillContain = styled.div`
@media ${device.mobile}{
  width: 45px;
  height: 40px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
}

@media ${device.mobileSmall}{
  width: 50px;
  height: 55px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
}

@media ${device.tablets}{
  width: 75px;
  height: 80px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
}
@media ${device.tabletsSmall}{
  width: 90px;
  height: 90px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
}
@media ${device.desktop}{
  width: 110px;
  height: 120px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
}

@media ${device.desktopSmall}{
  width: 130px;
  height: 150px;
  border-radius: 0.3125rem;
  border: 1px solid #f9c20233;
  background: #15161f;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #f9c202;
    animation: ${breatheAnimation} 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
}
  
`;
export const StyledIconsSkill = styled.img`
@media ${device.mobile}{
 width:30%;
 height:auto;
}

@media ${device.mobileSmall}{
  width:40%;
 height:auto;
}

@media ${device.tablets}{
  width:40%;
 height:auto;
}
@media ${device.tabletsSmall}{
  width:40%;
 height:auto;
}
@media ${device.desktop}{
  width:40%;
 height:auto;
}

@media ${device.desktopSmall}{
  width:40%;
 height:auto;
}`;
export const StyledContentText = styled.div`

  @media ${device.mobile}{
    padding:8px 5px;
    
}

@media ${device.mobileSmall}{
  margin: 0px 10px;

    text-align:justify;
}

@media ${device.tablets}{
    margin: 0px 10px;
    text-align:justify;
}
@media ${device.tabletsSmall}{
    margin: 0px 10px;
    text-align:justify;
}
@media ${device.desktop}{
    margin: 0px 10px;
    text-align:justify;
}

@media ${device.desktopSmall}{
    margin: 0px 10px;
    text-align:justify;
}
`;

export const StyledContenPSkills = styled.p`
@media ${device.mobile}{
  margin-top: 10px;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 0.80rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width:100%

}

@media ${device.mobileSmall}{
  margin-top: 10px;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 0.90rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 

}

@media ${device.tablets}{
  margin-top: 10px;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
}
@media ${device.tabletsSmall}{
  font-size: 1rem;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.desktop}{
  margin-top: 10px;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}

@media ${device.desktopSmall}{
  margin-top: 10px;
  color: #e6e6e6;
  font-family: MonaSans;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}
 
`;

export const StyledContentTitle = styled.h2`
@media ${device.mobile}{
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}



@media ${device.mobileSmall}{
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media ${device.tablets}{
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.tabletsSmall}{
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media ${device.desktop}{
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}

@media ${device.desktopSmall}{
  overflow: hidden;
  color: #f9c202;
  font-family: MonaSans;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
 

`;
