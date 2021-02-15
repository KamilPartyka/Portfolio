import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    dark: '3D3D3D',
    blue: '#41A1B1',
    yellow: '#FEE74B',
    gray: '#898F8B',
    lightYellow: '#F5F0D3',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
