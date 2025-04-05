import React from 'react';

import Bevel from 'components/Bevel/Bevel';

import { StyledWrapper, StyledFooter } from './styles';

interface FooterProps {
  callbackFn: () => void;
}

const Footer = ({ callbackFn }: FooterProps) => (
  <StyledWrapper>
    <Bevel isReverse />
    <StyledFooter>
      <p>
        <button
          type='button'
          onClick={() => callbackFn()}
        >
          Code with <span>&#9829;</span>
        </button>
        {new Date().getFullYear()} Kamil Partyka
      </p>
    </StyledFooter>
  </StyledWrapper>
);

export default Footer;
