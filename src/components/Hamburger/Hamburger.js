import React from 'react';

import {
  StyledWrapper,
  StyledHamburger,
  StyledHamburgeBox,
  StyledHamburgeBoxInner,
} from './styled';

const Hamburger = ({ callbackFn, isSideNavActive }) => {
  return (
    <StyledWrapper>
      <StyledHamburger onClick={() => callbackFn()}>
        <StyledHamburgeBox>
          <StyledHamburgeBoxInner
            isSideNavActive={isSideNavActive}
          ></StyledHamburgeBoxInner>
        </StyledHamburgeBox>
      </StyledHamburger>
    </StyledWrapper>
  );
};

export default Hamburger;
