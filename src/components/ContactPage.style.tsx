import styled from "styled-components";
import { device } from "./Breakpoint";

export const StyledNavContact = styled.nav`
padding:5%;
width:100%;
height:100vh;
background-image: linear-gradient(to left bottom, #19ca68, #00b26b, #009969, #008163, #046959);

`


export const ContentContact = styled.div`
@media ${device.mobile}{
  width:100%;
  height:auto;
margin: 0 auto;
border-radius: 1.0625rem;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.25) inset;
backdrop-filter: blur(20px);
padding: 30px 0px;
}

@media ${device.mobileSmall}{
  width:100%;
  height:auto;
margin: 0 auto;
border-radius: 1.0625rem;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.25) inset;
backdrop-filter: blur(20px);
padding: 50px 10px;
}

@media ${device.tablets}{
  width:100%;
  height:auto;
margin: 0 auto;
border-radius: 1.0625rem;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.25) inset;
backdrop-filter: blur(20px);
padding: 60px 10px;
}
@media ${device.tabletsSmall}{
  width:60%;
  height:auto;
  margin: 0 auto;
  border-radius: 1.0625rem;
  background: rgba(255, 255, 255, 0.30);
  box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.25) inset;
  backdrop-filter: blur(20px);
  padding: 70px 10px;
}
@media ${device.desktop}{
  width:60%;
  height:auto;
margin: 0 auto;
border-radius: 1.0625rem;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.25) inset;
backdrop-filter: blur(20px);
padding: 100px 0px;
}

@media ${device.desktopSmall}{
width:100%;
height:auto;
margin: 0 auto;
border-radius: 1.0625rem;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.25) inset;
backdrop-filter: blur(20px);
padding: 130px 0px;
}


`

export const ImgLogo = styled.img`
@media ${device.mobile}{
  width:30%;
  display:flex;
  margin:0 auto;
  
}

@media ${device.mobileSmall}{
  width:30%;
  display:flex;
  margin:0 auto;
 
}

@media ${device.tablets}{
  width:30%;
  display:flex;
  margin:0 auto;

}
@media ${device.tabletsSmall}{
  width:30%;
  display:flex;
  margin:0 auto;
;
}
@media ${device.desktop}{
  width:25%;
  display:flex;
  margin:0 auto;

}

@media ${device.desktopSmall}{
  width:25%;
  display:flex;
  margin:0 auto;
}
 `

export const TextArea = styled.div`

@media ${device.mobile}{
  border-radius: 1.875rem;
background: #15161F;
height:100px;
width:90%;
margin: 10px auto;
text-align:center;
}



@media ${device.mobileSmall}{
  border-radius: 1.875rem;
background: #15161F;
height:85px;
width:90%;
margin: 10px auto;
text-align:center;
}

@media ${device.tablets}{
 
}
@media ${device.tabletsSmall}{
  border-radius: 1.875rem;
background: #15161F;
height:100px;
width:340px;
margin: 10px auto;
text-align:center;
}
@media ${device.desktop}{
  border-radius: 1.875rem;
background: #15161F;
height:100px;
width:340px;
margin: 10px auto;
text-align:center;

}

@media ${device.desktopSmall}{
  border-radius: 1.875rem;
background: #15161F;
height:100px;
width:340px;
margin: 10px auto;
text-align:center;
}
`


export const Text = styled.p `
color: #FFF;
padding-top:10px;
font-family: Mona Sans;
font-size: 1.0625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
  
export const TextAreaInput = styled.input `
  margin-top:10px;
  width:250px;
  height:30px;
  font-size: 18px;
  padding-left:12px;
  background-color:#15161F;
  border: none;
  color: #fff;
  background-color:transparent;

    `
    

export const BtnWhatsApp = styled.button`
border-radius: 1.25rem;
background: #25D366;
border:none;
display:flex;
margin:0 auto;
cursor: pointer;


`
export const TextBtn = styled.p`
color: #15161F;
font-family: Mona Sans;
font-size: .9625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding:10px;
`

export const LinkBtn = styled.a`
`