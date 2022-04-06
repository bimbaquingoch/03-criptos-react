import PropTypes from "prop-types";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { InputSubmit } from "../StyledComponents";

const Formulario = () => {
   const [Selectmonedas] = useSelectMonedas("Elige tu moneda");

   Selectmonedas();
   return (
      <form>
         <Selectmonedas />
         <InputSubmit type='submit' value='Cotizar' />
      </form>
   );
};

Formulario.propTypes = {};

export default Formulario;
