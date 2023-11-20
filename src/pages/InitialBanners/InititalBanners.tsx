import {
  StyledBtn,
  StyledBtnP,
  StyledNavBanner,
  StyledCarrosel,
} from "../../components/InititalBanners.style";

function InititalBanners() {
  return (
    <>
      <StyledBtn>
        <StyledBtnP>Open to Work !</StyledBtnP>
      </StyledBtn>
      <StyledNavBanner>
        <StyledCarrosel imageUrl="1.jpg" width="1050px" />
        <StyledCarrosel imageUrl="2.jpg" width="105px" />
        <StyledCarrosel imageUrl="3.jpg" width="105px" />
        <StyledCarrosel imageUrl="4.jpg" width="105px" />
      </StyledNavBanner>
    </>
  );
}

export default InititalBanners;
