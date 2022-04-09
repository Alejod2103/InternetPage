import styled from "styled-components";

export const LabelStyled = styled.label`
    h3{
        width: 170px;
        display: flex;
        left: 20px;
        font-size: 19px;
        bottom: 85px;
        border-bottom: 2px solid #000;
        position: relative;
        @media (min-width: 300px) and (max-width: 700px){
            width: 104px;
            font-size: 12px;
        }
    }
    p{
        font-size: 12px;
        position: relative;
        bottom: 80px;
        left: 35px;
        @media (min-width: 300px) and (max-width: 700px){
            left: 15px;
            font-size: 11px;
        }
    }
`;

export const CheckContainer = styled.div`
    position: relative;
    height: 20px;
    width: 200px;
    left: 30px;
    @media (min-width: 300px) and (max-width: 700px) {
        height: 10px;
        left: 0;
        
    }
`;

export const TextCheck = styled.h3`
    font-size: 12px;
    position: relative;
    bottom: 65px;
    margin-left: 50px;
    @media (min-width: 300px) and (max-width: 700px){
        margin-left: 18%;
    }
`;

export const InputStyled = styled.input`
    height: 20px;
    width: 100px;
    left: 40px;
    position: relative;
    bottom: 85px;
    @media (min-width: 300px) and (max-width: 700px){
        left: 13%;
    }
`;