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
    scrollbar-color: #CCB842 #396193;
  }
  
  /* Works on Chrome, Edge, and Safari */

  *::-webkit-scrollbar {
    width: 20px;
  }
  
  *::-webkit-scrollbar-track {
    background: #396193;
    border-left: 1px solid white;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #CCB842;
    border-radius: 20px;
    border: 3px solid white;
  }

 
  body {background-color:  #5D4724;}

`;
