import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { StyledWrapper, StyledListWrapper, StyledList } from './styled';

const SideBarNavigation = ({ callbackFn, isSideNavActive }) => {
  return (
    <StyledWrapper isActive={isSideNavActive}>
      <StyledListWrapper>
        <StyledList>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#hero')}>Home</button>
          </li>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#aboutMe')}>About me</button>
          </li>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#skills')}>Skills</button>
          </li>
          <li onClick={() => callbackFn()}>
            <button onClick={() => scrollTo('#portfolio')}>Portfolio</button>
          </li>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};
export default SideBarNavigation;
