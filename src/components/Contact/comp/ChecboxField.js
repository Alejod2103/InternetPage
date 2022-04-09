import React from 'react'
import { LabelStyled, InputStyled, CheckContainer, TextCheck } from './CheckBoxStyles.js';

const CheckboxField = (props) => {
    const { handleChange, type } = props;
  return (
    <CheckContainer>
      <LabelStyled><h3>Agregar canales para adultos?</h3> <p>(Sin costo adicional)</p></LabelStyled>
      <TextCheck>Si</TextCheck><InputStyled type={type} value={true} />
      <TextCheck>No</TextCheck><InputStyled type={type} onChange={handleChange} value={false} />
    </CheckContainer>
  )
};

export default CheckboxField;