import styled from 'styled-components';

export const SelectCont = styled.div`
    width: 70%;
    height: 80px;
    position: relative;
    margin-top: 25px;
    margin-left: 270px;  
    
    @media (min-width: 300px) and (max-width: 700px) {
        margin-left: 42%;
    }
`;

export const LabelStyled = styled.label`
    position: relative;
    margin-left: 50px;
    font-weight: 700;
    bottom: 5px;
    font: montserrat;
    border-bottom: 2px solid #000;
    @media (min-width: 300px) and (max-width: 700px){
        bottom: 0;
        top: 5px;
        font-size: 16px;
    }
`;

export const SelectStyled = styled.select`
    background-color: #000;
    border-radius: 8px;
    outline: none;
    color: #fff;
    @media (min-width: 300px) and (max-width: 700px){
        width: 150px;
        top: 12%;
        margin-left: 5%;
        position: relative; 
    }
`;