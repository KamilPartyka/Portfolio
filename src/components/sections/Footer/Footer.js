import React from 'react';

import Bevel from 'components/simple/Bevel/Bevel';

import { StyledWrapper, StyledFooter } from './styles';

const Footer = () => (
  <StyledWrapper>
    <Bevel isReverse />
    <StyledFooter>
      <p>
        <button type="button" onClick={() => null}>
          Code with ❤️
        </button>
        {new Date().getFullYear()} Kamil Partyka
      </p>
    </StyledFooter>
  </StyledWrapper>
);

export default Footer;
