import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import Pricing from "./components/Pricing/Pricing.js"
import Contact from "./components/Contact/Contact";
import { FirstContainer } from "./components/Pricing/PricingStyles";


import {
  Navbar,
  Header,
  Features,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>

      <FirstContainer>
        <Pricing 
          data={[
            { text: "Conexion optima de fibra optica", value: true },
            { text: "Conexion para 5 dispositivos", value: true },
            {text: "Soporte para descargas", value: true},
            {text: "Mayor potencia de red", value: true},
            
          ]}
          price={49.99}
          duration="m"
          currency="$"
          buttonContent="Ordena Hoy"
          subTitle="100Mb - 300mb"
          headerText="Internet Fibra"
          priceText="Servicio de fibra estándard"
        />

        <Pricing
        data={[
          { text: "Conexion de descarga Ilimitada", value: true },
          { text: "Conexion hasta para 15 dispositivos", value: true },
          { text: "Mayor frecuencia de Red", value: true },
          { text: "ideal para juegos y descargas", value: true },
          { text: "Mejor rendimiento del servicio de internet", value: true },
          { text: "Optimizado para todos tus dispositivos", value: true},
          { text: "Ideal para servicios Streaming como Netflix", value: true },
        ]}
        price={69.99}
        background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
        duration="m"
        alt="100px"
        currency="$"
        buttonContent="Ordena Hoy"
        subTitle="+ 1000mbps"
        priceText="Servicio de fibra ULTRA"
        headerText="Mayor Ahorro"

        />
      </FirstContainer>
      <Features data-aos="fade-up" />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
