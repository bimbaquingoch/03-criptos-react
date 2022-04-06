import { useState } from "react";
import { Heading, Contenedor, Imagen, FormContainer } from "./StyledComponents";

import ImgCripto from "./img/imgCripto.png";
import Formulario from "./Components/Formulario";

function App() {
   return (
      <>
         <Contenedor>
            <Imagen src={ImgCripto} alt='imganes cripto' />
            <FormContainer>
               <Heading>cotiza criptos al instante</Heading>
               <Formulario />
            </FormContainer>
         </Contenedor>
      </>
   );
}

export default App;
