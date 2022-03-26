import styled from 'styled-components'

export const FirstContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;

  @media (min-width: 300px) and (max-width: 600px) {
    height: 100%;
    flex-direction: column;
    .pricing-component{
      margin: 2rem 0;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    height: 100%;    
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    height: 100%;    
  }
`;

export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
  font-family: 'Raleway', sans-serif;
  width: 50rem;
  min-height: 40rem;
  height: 700px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #1d3557;
  margin: 20px;
  box-shadow: 0 8px 14px -6px ${(props) => props.shadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 8px 26px -6px ${(props) => props.shadow};
    margin-bottom: 0.4rem;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    width: 25rem;
    height: ${(props) => props.alt}}

`

export const Header = styled.div`
  margin: 0.6rem;
  height: 4rem;
  background-color: #ebf3fd;
  background-image: ${(props) => props.background};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 600;
`

export const PricingContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const PriceContainer = styled.div`
    display: flex;
`;

export const CurrencyContainer = styled.div`
    margin-top: 0.5rem;
    margin-right: 0.2rem;
    span{
      font-size: 23px;
    }
`;

export const Price = styled.div`
  span {
    font-size: 7rem;
  }
`;

export const Duration = styled.div`
  margin-top: 2rem;
`;

export const SubTitle = styled.div`
    text-transform: uppercase;
    text-align: center;
    margin: 0.4rem 0 1.3rem 0;
    font-size: 19px;
`;

export const PriceText = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    font-size: 22px;
    text-align: center;
    font-weight: 100;

    @media (min-width: 300px) and (max-width: 600px) {
      font-size: 14.5px;
      width: 100%;
    }
`;

export const DataContainer = styled.div`
  padding: 20px;
  @media (min-width: 300px) and (max-width: 600px){

  }
  ul {
    list-style-type: none;
    font-size: 17px;
    @media (min-width: 300px) and (max-width: 600px){
      font-size: 15px;
    }
    li{
      display: flex;
      margin-top: 10px;
      align-items: center;

      .true{
        color: #34f034;
        font-size: 1rem;
      }
      .false{
        color: #f54343;
      }
      svg {
        margin-right: 0.5rem;
        font-size: 0.8rem;
      }
      margin-bottom: 1.5rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 0.3rem;
  border: 0.1rem solid #1d3557;
  width: 90%;
  height: 3.5rem;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: #1d3557;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 60%;
  left: 85px;
  text-align: center;
  font-weight: 100;
  @media (min-width: 300px) and (max-width:800px) {
    left: 55px;
  }
`;