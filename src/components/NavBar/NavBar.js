import React from 'react';

import { StyledWrapper, StyledList } from './styled';

const NavBar = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio</li>
      </StyledList>
    </StyledWrapper>
  );
};

export default NavBar;
