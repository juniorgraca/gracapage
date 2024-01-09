import logoImgCont from "/logoContact.png";
import {  StyledNavContact, ContentContact,ImgLogo, TextArea, Text, TextAreaInput, BtnWhatsApp, TextBtn} from "../../components/ContactPage.style"
import {
} from "../../components/InititalBanners.style";

function Contact() {
  return (
   <>

        <StyledNavContact>
          <ContentContact>
          <ImgLogo src={logoImgCont}/>
          <TextArea>
          <Text>
            Mensagem:
          </Text>
          <TextAreaInput placeholder="Digite aqui sua mensagem"></TextAreaInput>
       
        </TextArea>
        <BtnWhatsApp><TextBtn>Chat on WhatsApp</TextBtn></BtnWhatsApp>
        </ContentContact>
       
        </StyledNavContact>
        </>
   
  )
}

export default Contact
