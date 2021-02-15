import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { StyledWrapper, StyledListWrapper, StyledList } from './styled';

const NavBar = () => {
  return (
    <StyledWrapper>
      <div />
      <StyledListWrapper>
        <StyledList>
          <li>
            <button onClick={() => scrollTo('#aboutMe')}>About me</button>
          </li>
          <li>
            <button onClick={() => scrollTo('#skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollTo('#portfolio')}>Portfolio</button>
          </li>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default NavBar;
