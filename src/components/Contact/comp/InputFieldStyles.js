import styled from 'styled-components';

export const InputCont = styled.div`
    position: relative;
    top: 2px;
    margin-bottom: 12px;
    margin-top: 8px;
    margin-left: 25px;
    @media (min-width: 300px) and (max-width: 700px) {
    position: relative;
    top: 4px;
    margin-bottom: 12px;
    margin-top: 8px;
    margin-left: 13px;
    }
`;

export const LabelStyled = styled.label`
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: 500;
`;

export const InputFormStyled = styled.input`
    margin-top: 2px;
    width: 500px;
    height: 25px; 
    border-radius: 40px;
    border: 2px solid #000;
    outline: none;
    
    @media (min-width: 300px) and (max-width: 700px) {
        width: 92%;        
    }
`;