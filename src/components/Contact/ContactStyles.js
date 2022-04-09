import styled from 'styled-components';

export const ButtonStyled = styled.button`
    position: absolute;
    margin-left: 160px;
    bottom: 20px;
    height: 40px;
    width: 200px;
    background-color: #4287f5;
    outline: none;
    border-radius: 25px;
    cursor: pointer;
    h1{
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }
    @media (min-width: 300px) and (max-width: 700px) {
        margin-left: 30%;
    }
`;

export const TextLeft = styled.h3`
    font-size: 44px;
    position: absolute;
    left: 60px;
    text-transform: uppercase;
    font-weight: 400;
    width: 40%;
    letter-spacing: 1.5px;
    top: 320px;
    color: #fff;
    @media (min-width: 300px) and (max-width: 700px) {
        position: absolute;
        font-size: 23px;
        top: 220px;
        width: 85%;
        left: 25px;
    }
`;

export const TextOne = styled.h1`
  position: relative;
  margin: 20px;
  left: 135px;
  width: 250px;
  top: 15px;
  color: #4287f5;
  font: Roboto, sans;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 25px;
  @media (min-width: 300px) and (max-width: 700px) {
    left: 0;
    display: flex;
    width: 90%;
    font-size: 16px;
  }
`;

export const TextLeftTwo = styled.h3`
    font-size: 24px;
    position: absolute;
    left: 60px;
    text-transform: uppercase;
    font-weight: 500;
    width: 40%;
    top: 285px;
    color: #000;
    @media (min-width: 300px) and (max-width: 700px){
        position: absolute;
        font-size: 17px;
        top: 190px;
        width: 245px;
        left: 25px;
        border-bottom: 1px solid #000;
    }
`;