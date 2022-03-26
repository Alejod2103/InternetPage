import styled from 'styled-components'

export const ContactContainer = styled.div`
  width: 1000px;
  position: relative;
  left: 220px;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 820px) {
    margin: 40px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
    ::before{
        content: '';
        position: absolute;
        height: 70%;
        width: 2px;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        background: #afafb6;
    }
`;

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
    height: 20x;
    width: 20x;
    background-color: yellow;
    color: #fff;
`;

export const Button = styled.button`
    pointer-events: auto;
	cursor: pointer;
	background: #e7e7e7;
	border: none;
	padding: 1.5rem 3rem;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	position: relative;
	display: inline-block;

    ::before{
        position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    }

    ::after{
        position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    }
`;
