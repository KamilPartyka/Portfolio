import React from 'react';

import {
  StyledWrapper,
  StyledHamburger,
  StyledHamburgerBox,
  StyledHamburgerBoxInner,
} from './styles';

interface HamburgerProps {
  callbackFn: () => void;
  isSideNavActive?: boolean;
}

const Hamburger = ({ callbackFn, isSideNavActive = false }: HamburgerProps) => (
  <StyledWrapper>
    <StyledHamburger onClick={() => callbackFn()}>
      <StyledHamburgerBox>
        <StyledHamburgerBoxInner isSideNavActive={isSideNavActive} />
      </StyledHamburgerBox>
    </StyledHamburger>
  </StyledWrapper>
);

export default Hamburger;
