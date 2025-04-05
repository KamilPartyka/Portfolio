import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
  
  h1,h2,h3,h4,h5,p {
    margin: 0;
    font-style: normal;
    font-weight: normal;
  }
`;

export default GlobalStyles;
