import React from 'react';

import Bevel from 'components/Bevel/Bevel';

import { StyledWrapper, StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledWrapper>
      <Bevel reverse />
      <StyledFooter>
        <p>{new Date().getFullYear()} Kamil Partyka</p>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Footer;
