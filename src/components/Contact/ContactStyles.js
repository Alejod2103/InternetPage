import styled from 'styled-components'

export const ContactContainer = styled.div`
  width: 1000px;
  position: relative;
  left: 15%;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 820px) {
    margin: 40px 0;
  }

  @media (min-width: 300px) and (max-width: 800px){
      flex-direction: column-reverse;
      width: 90%;
      left: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 300px) and (max-width: 600px){
      flex-direction: column-reverse;
            
  }
`;

export const LeftSide = styled.div`

    

    @media (min-width: 300px) and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`

export const Details = styled.div`
    margin: 14px;
    text-align: center;
    i{
        font-size: 30px;
        color:  rgb(255, 69, 0);
        margin-bottom: 10px;
    }
`;

export const Topic = styled.div`
    font-size: 18px;
    font-weight: 500;
`;

export const TextOne = styled.div`
    font-size: 14px;
    color: #afafb6;
`;

export const TextTwo = styled.div`
    font-size: 14px;
    color: #afafb6;
`;

export const RightSide = styled.div`
    width: 75%;
    margin-left: 75px;

    @media (min-width: 300px) and (max-width: 600px){
        margin-left: 20px;
    }
`;

export const TopicText = styled.div`
    font-size: 23px;
    font-weight: 600;
    color:  rgb(255, 69, 0);
`;

export const InputBox = styled.div`
    height: 50px;
    width: 100%;
    color: #000;
    margin: 12px 0;

    @media (min-width: 300px) and (max-width: 600px) {
        margin: 12px 0;
    }
`;

export const InputText = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background-color: #F0F1F8;
    border-radius: 6px;
    color: #000;
    padding: 0 15px;
    resize: none;
`;

export const SubmitContainer = styled.div`
    position: relative;
    height: 40px;
    width: 90px;
    color: #fff;
`;

export const Button = styled.a`
    background: rgb(255, 69, 0);
    position: absolute;
    color: #fff;
    width: 100%;
    border-radius: 30px; 

    h3{
        margin-left: 11px;
    }
`;
