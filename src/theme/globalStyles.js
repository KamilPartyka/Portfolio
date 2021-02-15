import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyles;
