import { FormSelect } from "../StyledComponents";

const useSelectMonedas = (label) => {
   const Selectmonedas = () => (
      <>
         <FormSelect htmlFor=''>{label}</FormSelect>
      </>
   );
   return [Selectmonedas];
};

export default useSelectMonedas;
