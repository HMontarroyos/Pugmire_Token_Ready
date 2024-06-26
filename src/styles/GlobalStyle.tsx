import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
  }

  /* Works on Firefox */

  * {
    scrollbar-width: auto;
    scrollbar-color: #0b2a77 #53cfd0;
  }
  
  /* Works on Chrome, Edge, and Safari */

  *::-webkit-scrollbar {
    width: 20px;
  }
  
  *::-webkit-scrollbar-track {
    background: #53cfd0;
    border-left: 1px solid white;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #0b2a77;
    border-radius: 20px;
    border: 3px solid white;
  }

 
  body {background-color:  #5D4724;}

`;
