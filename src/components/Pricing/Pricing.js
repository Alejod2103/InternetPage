import React from 'react';
import { FaCheck } from "react-icons/fa";
import { ImCross } from 'react-icons/im';
import './Pricing.css';
import { MainContainer, 
    Header, 
    PricingContainer, 
    CurrencyContainer, 
    Price, 
    Duration,
    PriceContainer,
    SubTitle,
    PriceText,
    Button,
    ButtonContainer,
    DataContainer,
    
     } from './PricingStyles.js';

    const Pricing = ({ 
        data, 
        price,
        duration,
        shadow = "#a0c5fa",
        buttonContent,
        currency = "$",
        subTitle,
        priceText,
        headerText,
        background,
    }) => {
    return (
        <MainContainer shadow={shadow}>
        <Header background={background}>{headerText}</Header>
        {price !== undefined && (
          <PricingContainer>
            <PriceContainer>
              <CurrencyContainer>
                <span>{currency}</span>
              </CurrencyContainer>
              <Price>
                <span>{price}</span>
              </Price>
              {price > 0 && (
                <Duration>
                  <span> {duration === "m" ? "/ mo" : "/ yr"}</span>
                </Duration>
              )}
            </PriceContainer>
            {subTitle && (
              <SubTitle>
                <h4>{subTitle}</h4>
              </SubTitle>
            )}
            {priceText && (
              <PriceText>
                <h5>{priceText}</h5>
              </PriceText>
            )}
          </PricingContainer>
        )}
        
        {buttonContent && (
            <a href="tel:+1(804)298-1275">
          <ButtonContainer>
            <Button>{buttonContent}</Button>
          </ButtonContainer>
          </a>
        )}
        {data && (
          <DataContainer>
            <ul>
              {data.map((dt, index) => (
                <li key={index}>
                  {dt.value ? (
                    <FaCheck className="true" />
                  ) : (
                    <ImCross className="false" />
                  )}
                  {dt.text}
                </li>
              ))}
            </ul>
          </DataContainer>
        )}
      </MainContainer>
    )
}

export default Pricing;