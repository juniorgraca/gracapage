import logoImgCont from "/logoContact.png";
import { useRef } from "react";

import {
  StyledNavContact,
  ContentContact,
  ImgLogo,
  TextArea,
  Text,
  TextAreaInput,
  BtnWhatsApp,
  TextBtn,

} from "../../components/ContactPage.style";

function Contact() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const generateWhatsAppLink = (updatedValue: string) => {
    return `https://web.whatsapp.com/send/?phone=5567981234439&text=${encodeURIComponent(updatedValue)}&type=phone_number&app_absent=0`;
  };

  const onButtonClick = () => {
    if (inputRef.current) {
      const updatedValue = inputRef.current.value;
      const whatsappLink = generateWhatsAppLink(updatedValue);
      console.log(whatsappLink); // Log the generated link
      
      // Open WhatsApp in a new window/tab
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <>
      <StyledNavContact>
        <ContentContact>
          <ImgLogo src={logoImgCont} />
          <TextArea>
            <Text>Mensagem:</Text>
            <TextAreaInput placeholder="Digite aqui sua mensagem" ref={inputRef} />
          </TextArea>
          <BtnWhatsApp onClick={onButtonClick}>
            <TextBtn>Chat on WhatsApp</TextBtn>
          </BtnWhatsApp>
        </ContentContact>
      </StyledNavContact>
    </>
  );
}

export default Contact;
