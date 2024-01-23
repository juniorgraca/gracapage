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
    return `https://wa.me//5567981234439?text=${encodeURIComponent(updatedValue)}`;
  };

  const onButtonClick = () => {
    if (inputRef.current) {
      const updatedValue = inputRef.current.value;
      const whatsappLink = generateWhatsAppLink(updatedValue);
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
