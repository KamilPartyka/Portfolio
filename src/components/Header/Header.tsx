import React from 'react';

import { StyledWrapper, StyledHeader } from './styles';

interface HeaderProps {
  title: string;
  secondary?: boolean;
}

const Header = ({ title, secondary = false }: HeaderProps) => (
  <StyledWrapper secondary={secondary}>
    <StyledHeader secondary={secondary}>{title}</StyledHeader>
  </StyledWrapper>
);

export default Header;
