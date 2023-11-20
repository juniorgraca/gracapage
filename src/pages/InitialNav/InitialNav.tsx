import {
  StyledContainerInit,
  StyledImgDivBtm,
  StyledLogoAvatar,
  StyledText,
} from "../../components/CompInitial.style";

function InitialNav() {
  return (
    <>
      <StyledImgDivBtm>
        <StyledContainerInit>
          <StyledLogoAvatar width="319" height="425" src="/logo--picture.png" />
          <StyledText>
            My name is José Carlos da Graça Júnior, or better known as Junior
            Graça. I am married, a father of a young boy, and I am 27 years old.
            I live in Três Lagoas - MS.
          </StyledText>
        </StyledContainerInit>
      </StyledImgDivBtm>
    </>
  );
}

export default InitialNav;
