import { useEffect, useState } from "react";
import { Heading, Contenedor, Imagen, FormContainer } from "./StyledComponents";

import ImgCripto from "./img/imgCripto.png";
import Formulario from "./Components/Formulario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resultado from "./Components/Resultado";
import Spinner from "./Components/Spinner";

function App() {
   const [monedas, setMonedas] = useState({});
   const [resultado, setResultado] = useState({});
   const [cargando, setCargando] = useState(false);

   useEffect(() => {
      if (Object.keys(monedas).length > 0) {
         const { moneda, criptomoneda } = monedas;
         const cotizarCripto = async () => {
            setCargando(true);
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const resp = await fetch(url);
            const result = await resp.json();
            setResultado(result.DISPLAY[criptomoneda][moneda]);
            setCargando(false);
         };
         cotizarCripto();
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
               {cargando ? (
                  <Spinner />
               ) : (
                  resultado.PRICE && <Resultado resultado={resultado} />
               )}
            </FormContainer>
         </Contenedor>
      </>
   );
}

export default App;
