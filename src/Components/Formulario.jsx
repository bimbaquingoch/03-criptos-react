import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { InputSubmit } from "../StyledComponents";

const Formulario = ({ setMonedas }) => {
   const [criptos, setCriptos] = useState([]);

   const [moneda, Selectmonedas] = useSelectMonedas("Elige tu moneda", monedas);
   const [criptomoneda, Selectcriptomonedas] = useSelectMonedas(
      "Elige tu Criptomoneda",
      criptos
   );

   useEffect(() => {
      const consultarApi = async () => {
         const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
         const respuesta = await fetch(url);
         const resultado = await respuesta.json();
         const arrayCriptos = resultado.Data.map((cripto) => {
            const objeto = {
               id: cripto.CoinInfo.Name,
               nombre: cripto.CoinInfo.FullName,
            };
            return objeto;
         });

         setCriptos(arrayCriptos);
      };
      consultarApi();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      if ([moneda, criptomoneda].includes("")) {
         toast.warn("Todos los campos son obligatorios", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
         return;
      }

      setMonedas({ moneda, criptomoneda });
   };

   return (
      <form onSubmit={handleSubmit}>
         <Selectmonedas />
         <Selectcriptomonedas />

         <InputSubmit type='submit' value='Cotizar' />
      </form>
   );
};

Formulario.propTypes = {};

export default Formulario;
