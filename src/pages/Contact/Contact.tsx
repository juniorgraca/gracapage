import logoImgCont from "/logoContact.png";
import {  StyledNavContact, ContentContact,ImgLogo, TextArea, Text, TextAreaInput} from "../../components/ContactPage.style"
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
          <TextAreaInput></TextAreaInput>
        </TextArea>
        </ContentContact>
       
        </StyledNavContact>
        </>
   
  )
}

export default Contact
