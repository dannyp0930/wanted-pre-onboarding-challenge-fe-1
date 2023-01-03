import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  
  body {
    background-color: #181820;
    -ms-overflow-style: none;
  }
 
  ::-webkit-scrollbar {
      display: none;
  }
  
  h1 {
    color: #F8F8F8;
    font-size: 2rem;
    font-weight: bold;
  }
  
  h2 {
    color: #F8F8F8;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  p { 
    color: #F8F8F8;
    font-size: 1rem;
  }
  
  button {
    cursor: pointer;
    color: #FC76A1;
    background: none;
    border: none;
    font-size: 2rem;
  }
  `;

export default GlobalStyle;
