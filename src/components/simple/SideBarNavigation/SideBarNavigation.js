import React from 'react';

import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { StyledWrapper, StyledListWrapper, StyledList } from './styles';

const SideBarNavigation = ({ callbackFn, isSideNavActive }) => {
  const handleClick = (to, option) => {
    scrollTo(to, option);
    callbackFn();
  };

  return (
    <StyledWrapper isActive={isSideNavActive}>
      <StyledListWrapper>
        <StyledList>
          <li>
            <button type="button" onClick={() => handleClick('#hero')}>
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleClick('#aboutMe', 'center')}
            >
              About me
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('#portfolio')}>
              Portfolio
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('#contact')}>
              Contact
            </button>
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
