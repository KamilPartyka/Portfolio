import React from 'react';

import Bevel from 'components/simple/Bevel/Bevel';

import { StyledWrapper, StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledWrapper>
      <Bevel isReverse />
      <StyledFooter>
        <p>
          <span onClick={() => alert('test')}>Code with ❤️</span>{' '}
          {new Date().getFullYear()} Kamil Partyka
        </p>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Footer;
