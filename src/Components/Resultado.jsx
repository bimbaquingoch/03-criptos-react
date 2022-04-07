import PropTypes from "prop-types";
import { ContenedorResultado, TextoResultado } from "../StyledComponents";

const Resultado = ({ resultado }) => {
   const { HIGHDAY, PRICE, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, MKTCAP } =
      resultado;
   console.log(resultado);
   return (
      <ContenedorResultado>
         <img
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt='criptomoneda'
         />
         <div>
            <TextoResultado size='30'>
               El precio es de: <span>{PRICE}</span>
            </TextoResultado>
            <TextoResultado>
               Precio más alto del día: <span>{HIGHDAY}</span>
            </TextoResultado>
            <TextoResultado>
               Precio más bajo del día: <span>{LOWDAY}</span>
            </TextoResultado>
            <TextoResultado color={CHANGEPCT24HOUR < 0 ? "ea4335" : "4ea853"}>
               Variación en las ultimas 24h: <span>{CHANGEPCT24HOUR}%</span>
            </TextoResultado>
            <TextoResultado>
               Capitalización de mercado: <span>{MKTCAP}</span>
            </TextoResultado>
         </div>
      </ContenedorResultado>
   );
};

Resultado.propTypes = {};

export default Resultado;
