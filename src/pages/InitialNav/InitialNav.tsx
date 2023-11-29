import {
  StyledContainerInit,
  StyledSection,
  StyledPicture,
  StyledTextArea,
  StyledTextTitle,
  StyledTextDesc,
  StyledPictureContain,
  StyledIconSocial,
  StyledIconSocialContain,
  StyledIconArea,Link

} from "../../components/CompInitial.style";



function InitialNav() {
  return (
    <>
      <StyledContainerInit>
        <StyledSection>
          <StyledPictureContain>
            <StyledPicture src="logo--picture.png" />
          </StyledPictureContain>
          <StyledTextArea>
            <StyledTextTitle>Quem sou</StyledTextTitle>
            <StyledTextDesc >
              Me chamo Junior Graça, tenho 27 anos e sou apaixonado por criar
              experiências digitais incríveis. Como Frontend Developer e UI
              Designer, minha jornada profissional é pautada na busca incessante
              pela excelência. Atualmente, estou mergulhado no universo do
              desenvolvimento e design, atuando como freelancer. Minha expertise
              concentra-se em produzir interfaces modernas, otimizadas em
              performance, repletas de animações cativantes e totalmente
              responsivas.
            </StyledTextDesc>

            <StyledIconArea>
              <Link href="https://www.behance.net/juniorgraca" target="_blank" rel="noopener noreferrer">
              <StyledIconSocialContain>
                <StyledIconSocial
                  src="icon-who/be.png"
                  width="44px"
                  height="30px"
                />   
              </StyledIconSocialContain>
         </Link>
              <Link href="https://github.com/juniorgraca" target="_blank" rel="noopener noreferrer">
              <StyledIconSocialContain>
             
                <StyledIconSocial
                  src="icon-who/gi.png"
                  width="36px"
                  height="36px"
                />
              </StyledIconSocialContain>
                </Link>
              <Link href="https://www.linkedin.com/in/josé-carlos-g-júnior-b22094240/" target="_blank" rel="noopener noreferrer">
              <StyledIconSocialContain>
                <StyledIconSocial
                  src="icon-who/li.png"
                  width="36px"
                  height="36px"
                />
              </StyledIconSocialContain>
                </Link>
            </StyledIconArea>
          </StyledTextArea>
        </StyledSection>
      </StyledContainerInit>
    </>
  );
}

export default InitialNav;
