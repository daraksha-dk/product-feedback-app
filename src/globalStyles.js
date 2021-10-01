import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      font-size: 16px;
      font-family: "Jost", sans-serif;
  }

  //colors
  

  button {
      cursor: pointer;
      border: none;
      font-family: 'Jost',sans-serif;
  }

  /* h1 {
      font-weight: bold;
      font-size: 1.5em;
      letter-spacing: -0.33px;
      line-height: 35px;
  }

  h2 {
      font-weight: bold;
      font-size: 1.25em;
      letter-spacing: -0.25px;
      line-height: 29px;
  } */

  h3 {
      font-weight: bold;
      font-size: 1.125em;
      letter-spacing: -0.25px;
      line-height: 26px;
      color: #3A4374;
  }

  ul {
    list-style-position: inside;
  }

  
`;

export default GlobalStyle;
