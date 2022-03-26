import React from 'react';
import { ContactContainer,
         Content,
         LeftSide,
        Details,
        Topic,
        TextOne,
        TextTwo,
        RightSide,
        TopicText,
        InputBox,
        InputText,
        SubmitContainer,
        Button,

        } from './ContactStyles.js';
import { FiMail } from 'react-icons/fi'
import { RiPhoneLine } from 'react-icons/ri';
import AutoComplete from './AutoComplete/AutoComplete.js';
import emailjs from 'emailjs-com';




function Contact() {

  const sendEmail = (e) =>
  
  {
    e.preventDefault();    
  
      emailjs.sendForm('service_6ph5kjv', 'template_rbiqdhe', e.value, 'RxPi0B8jcUAP2RxSS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
  }
  return (
    <ContactContainer>
        <Content>
            <LeftSide>
                <Details>
                  <i className="fa"> <RiPhoneLine/> </i>
                    <Topic>
                        Contactanos
                    </Topic>
                    <TextOne>+1(804)298-1275</TextOne>
                    <TextTwo>Soporte 24/7</TextTwo>                    
                </Details>

                <Details>
                  <i className="fa"><FiMail/></i>
                    <Topic>
                        Email
                    </Topic>
                    <TextOne>Multicableservice2022@gmail.com</TextOne>                    
                </Details>
            </LeftSide>

            <RightSide>
                <TopicText>
                  Contactanos
                </TopicText>
                <p>Agenda una cita y nos pondremos en contacto contigo a la brevedad.</p>
                  <form onsubmit={sendEmail}>
                    <InputBox className='input-box' >
                        <InputText placeholder='Nombre' name='name' />
                    </InputBox>

                    <InputBox className='input-box' >
                        <InputText placeholder='Telefono' name='phone' />
                    </InputBox>

                    <InputBox className='input-box' >
                    <InputText placeholder='Correo Electronico' name='email' />
                    </InputBox>

                    <InputBox className='input-box' >
                        <AutoComplete name='address' />
                    </InputBox>

                    <SubmitContainer>
                      <Button onSubmit={sendEmail}><h3>Enviar</h3></Button>
                    </SubmitContainer>

                  </form>
            </RightSide>

        </Content>
    </ContactContainer>
  )
}
export default Contact;
