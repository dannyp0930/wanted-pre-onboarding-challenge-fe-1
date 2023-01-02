import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p { 
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
