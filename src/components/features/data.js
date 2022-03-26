import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="#0a1930" size={22} />,
    heading: "Velocidad",
    text: "La verdad es que tu conexión de cable debe ser lo suficientemente rápida para transmitir video sin interrupciones, pero el tráfico de datos sobrecarga los cables. Ahí es donde las diferencias de velocidad entre internet de fibra óptica y cable se vuelven obvias.",
  },
  {

    id: 2,
    icon: <SiDatabricks color="#0a1930" size={22} />,
    heading: "Misma velocidad de descarga y subida",
    text: 'Los proveedores de internet de fibra óptica pueden dar igual importancia a las cargas y descargas. Eso hace que sea más fácil compartir archivos y trabajar desde casa con este tipo de servicios .',
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
    heading: "Televisión de mayor calidad",
    text: "¿Acabas de comprar una televisión 4K o estás pensando en comprar una? Estas televisiones tienen cuatro veces más píxeles en el mismo espacio y necesitan una mejor conexion de internet que solo te brinda la fibra optica",
  },
  {
    id: 4,
    icon: <FaGg color="#0a1930" size={22} />,
    heading: "Conexión con varios dispositivos",
    text: "Los días de tener un sólo dispositivo quedaron atrás. Ahora tenemos varios dispositivos en nuestros hogares, desde Computadoras, tabletas, teléfonos, parlantes inteligentes, etc. A medida que aumenta nuestro uso de internet, también aumenta nuestra necesidad de una transmisión de datos rápida y fiable que solamente nos otorga el servicio de fibra optica",
  },
];
