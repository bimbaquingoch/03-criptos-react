import { useEffect, useState } from "react";
import { Heading, Contenedor, Imagen, FormContainer } from "./StyledComponents";

import ImgCripto from "./img/imgCripto.png";
import Formulario from "./Components/Formulario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [monedas, setMonedas] = useState({});

   useEffect(() => {
      if (Object.keys(monedas).length > 0) {
         console.log(monedas);
      }
   }, [monedas]);

   return (
      <>
         <ToastContainer rtl={false} />
         <Contenedor>
            <Imagen src={ImgCripto} alt='imganes cripto' />
            <FormContainer>
               <Heading>cotiza criptos al instante</Heading>
               <Formulario setMonedas={setMonedas} />
            </FormContainer>
         </Contenedor>
      </>
   );
}

export default App;
