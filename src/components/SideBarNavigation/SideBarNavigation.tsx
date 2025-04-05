import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { StyledWrapper, StyledListWrapper, StyledList } from './styles';

interface SideBarNavigationProps {
  callbackFn: () => void;
  isSideNavActive?: boolean;
}

const SideBarNavigation = ({
  callbackFn,
  isSideNavActive = false,
}: SideBarNavigationProps) => {
  const handleClick = (to: string) => {
    scrollTo(to);
    callbackFn();
  };

  return (
    <StyledWrapper isActive={isSideNavActive}>
      <StyledListWrapper>
        <StyledList>
          <li>
            <button
              type='button'
              onClick={() => handleClick('#hero')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleClick('#aboutMe')}
            >
              About me
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleClick('#portfolio')}
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleClick('#contact')}
            >
              Contact
            </button>
          </li>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default SideBarNavigation;
