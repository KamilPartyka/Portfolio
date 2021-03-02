import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledWrapper,
  StyledHamburger,
  StyledHamburgeBox,
  StyledHamburgeBoxInner,
} from './styles';

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

Hamburger.propTypes = {
  callbackFn: PropTypes.func.isRequired,
  isSideNavActive: PropTypes.bool,
};
Hamburger.defaultProps = {
  isSideNavActive: false,
};

export default Hamburger;
