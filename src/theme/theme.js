import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    white: '#FFFFFF',
    dark: '#3D3D3D',
    blue: '#41A1B1',
    yellow: '#FEE74B',
    gray: '#898F8B',
    lightYellow: '#F5F0D3',
    error: '#8C1C2D',
    success: '#044604',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1700,
    },
    up: (key) => {
      const value = theme.breakpoints.values[key];
      return `@media all and (min-width: ${value}px)`;
    },
    down: (key) => {
      const value = theme.breakpoints.values[key];
      return `@media all and (max-width: ${value}px)`;
    },
  },
  bacelHeight: {
    mobile: '3rem',
    desktop: '10rem',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Theme;
