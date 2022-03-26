import React, { useState } from 'react';
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
import { db } from "../../firebase.js"

function Contact() {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [correo, setCorreo] = useState("");

    const [ setLoader] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts").add({
      name: name,
      email: correo,
      num: num,
    })
    .then(() => {
      setLoader(false);
      alert("Su admision a sido enviada, un Agente se pondra en contacto contigo a la brevedad posible")
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false)
    })

    setName('')
    setNum('')
    setCorreo('')
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
                  <form action="">
                    <InputBox className='input-box'>
                        <InputText placeholder='Nombre' />
                    </InputBox>

                    <InputBox className='input-box'>
                        <InputText placeholder='Telefono' />
                    </InputBox>

                    <InputBox className='input-box'>
                    <InputText placeholder='Correo Electronico' />
                    </InputBox>

                    <InputBox className='input-box'>
                        <AutoComplete />
                    </InputBox>

                    <SubmitContainer>

                    <Button onSubmit={handleSubmit}></Button>

                    </SubmitContainer>

                  </form>
            </RightSide>

        </Content>
    </ContactContainer>
  )
}

export default Contact
