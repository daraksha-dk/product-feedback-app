import * as styled from "styled-components";

//had to change so that prettier would format it
const GlobalStyles = styled.createGlobalStyle`
  :root {
    //Typography
    --white: #ffffff;

    //Heading text color

    //Buttons
    --brightPurple: #ad1fea;
    --hoverPurple: #c75af6;
    --royalBlue: #4661e6;
    --hoverRoyalBlue: #7c91f9;
    --lighterDarkBlue: #3a4374;
    --hoverDarkBlue: #656ea3;
    --brightRed: #d73737;
    --hoverRed: #e98888;
    --buttonTextColor: #f2f4fe;

    //Interactive Elements

    //Use for "Go back" and "sort by" buttons
    --darkBlue: #373f68;

    --interactiveHover: #cfd7ff;
    --lightButtonColor: #f2f4ff;
    --paleGray: #f7f8fd;
    --gray: #647196;

    //Form Elements

    //Roadmap colors
    --orange: #f49f85;
    --brightBlue: #62bcfa;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background-color: var(--paleGray);
  }

  body {
    height: 100%;
    font-size: 16px;
    font-family: "Jost", sans-serif;
  }

  input {
    padding: 0.9375rem 1rem 0.875rem;
  }

  input,
  textarea {
    background-color: var(--paleGray);
    border: none;
    border-radius: 5px;
    font-family: inherit;
    color: var(--lighterDarkBlue);

    &:focus {
      outline-style: solid;
      outline-color: var(--royalBlue);
      outline-width: thin;
    }
  }

  button {
    cursor: pointer;
    border: none;
    font-family: "Jost", sans-serif;
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
    color: #3a4374;
  }

  ul {
    list-style-position: inside;
  }
`;

export default GlobalStyles;
