import React from 'react';

import { StyledWrapper, StyledHeader } from './styled';

const Header = ({ title, secondary }) => {
  return (
    <StyledWrapper secondary={secondary}>
      <StyledHeader secondary={secondary}>{title}</StyledHeader>
    </StyledWrapper>
  );
};

export default Header;
