import styled from "@emotion/styled";
import { useState } from "react";

const Heading = styled.h1`
   align-items: center;
   color: #fff;
   display: flex;
   font-family: "Lato", sans-serif;
   justify-content: center;
`;

function App() {
   return (
      <>
         <Heading>desde App</Heading>
      </>
   );
}

export default App;
