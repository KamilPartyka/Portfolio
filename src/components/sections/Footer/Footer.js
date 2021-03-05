import React from 'react';

import PropTypes from 'prop-types';

import Bevel from 'components/simple/Bevel/Bevel';

import { StyledWrapper, StyledFooter } from './styles';

const Footer = ({ callbackFn }) => (
  <StyledWrapper>
    <Bevel isReverse />
    <StyledFooter>
      <p>
        <button type="button" onClick={() => callbackFn()}>
          Code with <span>&#9829;</span>
        </button>
        {new Date().getFullYear()} Kamil Partyka
      </p>
    </StyledFooter>
  </StyledWrapper>
);

Footer.propTypes = {
  callbackFn: PropTypes.func.isRequired,
};

export default Footer;
