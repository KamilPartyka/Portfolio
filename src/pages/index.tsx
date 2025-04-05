import React from 'react';

import { theme } from 'theme/theme';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'theme/globalStyles';

import { ThemeProvider } from 'styled-components';
import App from './app';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang='en' />
        <title>Kamil Partyka</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Cambo&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

export default IndexPage;
