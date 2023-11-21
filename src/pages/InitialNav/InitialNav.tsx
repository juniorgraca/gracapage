import {
  StyledContainerInit,
  StyledImgDivBtm,
  StyledLogoAvatar,
  StyledText,
  StyledContent,
} from "../../components/CompInitial.style";

function InitialNav() {
  return (
    <>
      <StyledContainerInit>
        <StyledImgDivBtm>
          <StyledContent>
            <StyledLogoAvatar
              width="289"
              height="385"
              src="/logo--picture.png"
            />
            <StyledText>
              My name is José Carlos da Graça Júnior, or better known as Junior
              Graça. I am married, a father of a young boy, and I am 27 years
              old. I live in Três Lagoas - MS.
            </StyledText>
          </StyledContent>
        </StyledImgDivBtm>
      </StyledContainerInit>
    </>
  );
}

export default InitialNav;
