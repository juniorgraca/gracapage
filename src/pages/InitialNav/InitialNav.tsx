import {
  StyledContainerInit,StyledSection,StyledPicture,StyledTextArea,StyledTextTitle,StyledTextDesc,StyledPictureContain
 
} from "../../components/CompInitial.style";

function InitialNav() {
  return (
    <>
      <StyledContainerInit>
       <StyledSection>
        <StyledPictureContain>
        <StyledPicture src="logo--picture.png"/>
        </StyledPictureContain>
        <StyledTextArea>
          <StyledTextTitle>Quem sou</StyledTextTitle>
          <StyledTextDesc> Me chamo Junior Graça, tenho 27 anos e sou apaixonado por criar experiências digitais incríveis.
Como Frontend Developer e UI Designer, minha jornada profissional é pautada na busca incessante pela excelência. Atualmente, estou mergulhado no universo do desenvolvimento e design, atuando como freelancer. Minha expertise concentra-se em produzir interfaces modernas, otimizadas em performance, repletas de animações cativantes e totalmente responsivas.</StyledTextDesc>
        </StyledTextArea>
       </StyledSection>
      </StyledContainerInit>
    </>
  );
}

export default InitialNav;
