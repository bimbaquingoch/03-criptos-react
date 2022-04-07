import { useState } from "react";
import { FormLabel, FormSelect } from "../StyledComponents";

const useSelectMonedas = (label, opciones) => {
   const [state, setState] = useState("");

   const Selectmonedas = () => (
      <>
         <FormLabel htmlFor=''>{label}</FormLabel>
         <FormSelect
            name=''
            id=''
            value={state}
            onChange={(e) => setState(e.target.value)}>
            <option value=''>Seleccione</option>
            {opciones.map((opcion) => (
               <option key={opcion.id} value={opcion.id}>
                  {opcion.nombre}
               </option>
            ))}
         </FormSelect>
      </>
   );
   return [state, Selectmonedas];
};

export default useSelectMonedas;
