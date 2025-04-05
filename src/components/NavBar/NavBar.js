import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { StyledWrapper, StyledListWrapper, StyledList } from './styles';

const NavBar = () => (
  <StyledWrapper>
    <StyledListWrapper>
      <StyledList>
        <li>
          <button
            type='button'
            onClick={() => scrollTo('#aboutMe', 'center')}
          >
            About me
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => scrollTo('#portfolio', 'start')}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => scrollTo('#contact', 'start')}
          >
            Contact
          </button>
        </li>
      </StyledList>
    </StyledListWrapper>
  </StyledWrapper>
);

export default NavBar;
