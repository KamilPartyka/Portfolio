import React from 'react';

import PropTypes from 'prop-types';

import { StyledWrapper, StyledHamburger, StyledHamburgerBox, StyledHamburgerBoxInner } from './styles';

const Hamburger = ({ callbackFn, isSideNavActive }) => (
  <StyledWrapper>
    <StyledHamburger onClick={() => callbackFn()}>
      <StyledHamburgerBox>
        <StyledHamburgerBoxInner isSideNavActive={isSideNavActive} />
      </StyledHamburgerBox>
    </StyledHamburger>
  </StyledWrapper>
);

Hamburger.propTypes = {
  callbackFn: PropTypes.func.isRequired,
  isSideNavActive: PropTypes.bool,
};
Hamburger.defaultProps = {
  isSideNavActive: false,
};

export default Hamburger;
