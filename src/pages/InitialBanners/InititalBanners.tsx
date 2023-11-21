import { useState } from "react";

import { banners } from "../../types/banners";

import {
  StyledBtn,
  StyledBtnP,
  StyledNavBanner,
  StyledCarrosel,
  StyledIcon,
} from "../../components/InititalBanners.style";

function InititalBanners() {
  const [witdh1, setWidth1] = useState<boolean>(true);
  const [witdh2, setWidth2] = useState<boolean>(false);
  const [witdh3, setWidth3] = useState<boolean>(false);
  const [witdh4, setWidth4] = useState<boolean>(false);
  const handleClick = (id: number) => {
    if (id === 1) {
      setWidth1(true);
      setWidth2(false);
      setWidth3(false);
      setWidth4(false);
    } else if (id === 2) {
      setWidth1(false);
      setWidth2(true);
      setWidth3(false);
      setWidth4(false);
    } else if (id === 3) {
      setWidth1(false);
      setWidth2(false);
      setWidth3(true);
      setWidth4(false);
    } else if (id === 4) {
      setWidth1(false);
      setWidth2(false);
      setWidth3(false);
      setWidth4(true);
    }
  };

  const pxFull = 1125;
  const pxMiddle = 105;

  const stylesArray = [
    witdh1
      ? {
          width: `${pxFull}px`,
          justifyContent: "space-evenly",
          paddingLeft: "15px",
        }
      : {
          width: `${pxMiddle}px`,
          justifyContent: "space-evenly",
        },
    witdh2
      ? {
          width: `${pxFull}px`,
          justifyContent: "space-evenly",
          paddingLeft: "15px",
        }
      : {
          width: `${pxMiddle}px`,
          justifyContent: "space-evenly",
        },
    witdh3
      ? {
          width: `${pxFull}px`,
          justifyContent: "space-evenly",
          paddingLeft: "15px",
        }
      : {
          width: `${pxMiddle}px`,
          justifyContent: "space-evenly",
        },
    witdh4
      ? {
          width: `${pxFull}px`,
          justifyContent: "space-evenly",
          paddingLeft: "15px",
        }
      : {
          width: `${pxMiddle}px`,
          justifyContent: "space-evenly",
        },
  ];

  return (
    <>
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
            <StyledIcon src={item.icon} width="50px" />
          </StyledCarrosel>
        ))}
      </StyledNavBanner>
    </>
  );
}

export default InititalBanners;
