import styled from "@emotion/styled";

// H1
export const Heading = styled.h1`
   color: #fff;
   flex-direction: column;
   font-family: "Lato", sans-serif;
   font-size: 34px;
   margin: 20px auto;
   text-align: center;
   text-transform: capitalize;

   ::after {
      background-color: #66a2fe;
      content: "";
      display: block;
      height: 6px;
      margin: 10px auto;
      width: 80%;
   }

   @media screen and (min-width: 720px) {
      margin: 100px auto;
   }
`;

// div
export const Contenedor = styled.div`
   max-width: 900px;
   margin: 0 auto;
   width: 90%;

   @media screen and (min-width: 720px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
   }
`;

// imagen
export const Imagen = styled.img`
   display: block;
   max-width: 400px;
   margin: 100px auto 0 auto;
   width: 80%;
`;

// form container
export const FormContainer = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-bottom: 100px;
`;

// boton cotizar
export const InputSubmit = styled.input`
   background-color: #66a2fe;
   border: none;
   border-radius: 5px;
   color: #fff;
   cursor: pointer;
   font-size: 20px;
   font-weight: 700;
   margin-top: 30px;
   padding: 15px;
   text-transform: uppercase;
   transition: background-color 300ms ease;
   width: 100%;

   :hover {
      background-color: #77a7fe;
   }
`;

// FormSelect

export const FormLabel = styled.label`
   color: #fff;
   display: block;
   font-family: "lato", sans-serif;
   font-size: 24px;
   font-weight: 700;
   margin: 15px 0;
   text-align: center;
`;

export const FormSelect = styled.select`
   border-radius: 5px;
   font-size: 18px;
   padding: 15px;
   width: 100%;
`;
