import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledHeader = styled.h2`
  font-size: 30px;
  position: relative;
  display: inline-block;
  z-index: 1;
  margin: 2rem 4rem;
  color: ${({ theme }) => theme.colors.dark};

  ::before {
    content: '';
    position: absolute;
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.colors.yellow : theme.colors.lightYellow};
    width: 100%;
    height: 100%;
    left: ${({ secondary }) => (secondary ? css`2.5rem` : css`-2.5rem`)};
    top: 0;
    z-index: -1;
  }

  ${breakpoint('xl')`
      font-size: 5rem;
  `}
`;

const Header = ({ title, secondary }) => {
  return (
    <div>
      <StyledHeader secondary={secondary}>{title}</StyledHeader>
    </div>
  );
};

export default Header;
