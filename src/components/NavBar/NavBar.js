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
            <button onClick={() => scrollTo('#aboutMe', 'center')}>
              About me
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('#portfolio', 'start')}>
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('#contact', 'center')}>
              Contact
            </button>
          </li>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default NavBar;
