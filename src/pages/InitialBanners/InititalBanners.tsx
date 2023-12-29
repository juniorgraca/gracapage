import { useState } from "react";

import { banners } from "../../types/banners";

import {
  StyledBtn,
  StyledBtnP,
  StyledNavBanner,
  StyledCarrosel,
  StyledNavContent,
  StyledTextBanner,
  StyledText,
  StyledIconText,

  
} from "../../components/InititalBanners.style";

function InititalBanners() {
  const [witdh1, setWidth1] = useState<boolean>(true);
  const [witdh2, setWidth2] = useState<boolean>(false);
  const [witdh3, setWidth3] = useState<boolean>(false);
  const [witdh4, setWidth4] = useState<boolean>(false);

  const handleClick = (id: number) => {
    setWidth1(id === 1 ? true : false);
    setWidth2(id === 2 ? true : false);
    setWidth3(id === 3 ? true : false);
    setWidth4(id === 4 ? true : false);
  };

  const pxFull = 100;
  const pxMiddle = 10;

  const stylesArray = [
    witdh1
      ? {
          width: `${pxFull}%`,
          cursor: "default",
          display: "flex",
          justifyContent: "space-evenly",

          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          transition: "0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
          alignItems: "start",
         
        }
      : {
          width: `${pxMiddle}%`,
          justifyContent: "space-evenly",
          filter: "grayscale(96%)",

     
        },

    witdh2
      ? {
          width: `${pxFull}%`,
          justifyContent: "space-evenly",
          cursor: "default",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          transition: "0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
          alignItems: "start",
          
        }
      : {
          width: `${pxMiddle}%`,
          justifyContent: "space-evenly",
          filter: "grayscale(96%)",
        },

    witdh3
      ? {
          width: `${pxFull}%`,
          justifyContent: "space-evenly",
          cursor: "default",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          transition: "0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
          alignItems: "start",
        }
      : {
          width: `${pxMiddle}%`,
          justifyContent: "space-evenly",
          filter: "grayscale(96%)",
        },

    witdh4
      ? {
          width: `${pxFull}%`,
          justifyContent: "space-evenly",
          cursor: "default",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          transition: "0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
          alignItems: "start",
        }
      : {
          width: `${pxMiddle}%`,
          filter: "grayscale(96%)",
          justifyContent: "space-evenly",
        },
  ];

  return (
    <>
        
      <StyledNavContent>
      <StyledBtn>
   
          <StyledBtnP>Open to Work !</StyledBtnP>
        </StyledBtn>
        <StyledNavBanner>
          {banners.map((item, index) => (
            <StyledCarrosel
              key={item.id}
              imageUrl={item.url}
              style={stylesArray[index]}
              onClick={() => handleClick(item.id)}
            >
              <StyledTextBanner>
                <StyledIconText>
                 
                  <StyledText>
                  
                  </StyledText>
                </StyledIconText>
              </StyledTextBanner>
            </StyledCarrosel>
          ))}
        </StyledNavBanner>
      </StyledNavContent>
    </>
  );
}

export default InititalBanners;
