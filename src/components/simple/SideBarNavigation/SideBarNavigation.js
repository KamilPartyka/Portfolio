import React from 'react';

import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { StyledWrapper, StyledListWrapper, StyledList } from './styles';

const SideBarNavigation = ({ callbackFn, isSideNavActive }) => {
  return (
    <StyledWrapper isActive={isSideNavActive}>
      <StyledListWrapper>
        <StyledList>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#hero')}>Home</button>
          </li>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#aboutMe', 'center')}>
              About me
            </button>
          </li>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#portfolio')}>Portfolio</button>
          </li>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#contact')}>Contact</button>
          </li>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

SideBarNavigation.propTypes = {
  callbackFn: PropTypes.func.isRequired,
  isSideNavActive: PropTypes.bool,
};

SideBarNavigation.defaultProps = {
  isSideNavActive: false,
};

export default SideBarNavigation;
