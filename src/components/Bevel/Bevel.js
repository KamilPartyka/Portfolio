import React from 'react';

import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledBevel = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.bacelHeight.mobile};

  background-color: ${({ color }) =>
    color
      ? css`
          ${({ theme }) => theme.colors.blue};
        `
      : css`
          ${({ theme }) => theme.colors.gray};
        `};

  clip-path: ${({ reverse }) =>
    reverse
      ? 'polygon(100% 0, 0 0, 0 100%);'
      : 'polygon(100% 100%, 100% 0, 100% 0, 0 100%);'};

  ${breakpoint('lg')`
    height: ${({ theme }) => theme.bacelHeight.desktop};
  `}
`;

const Bevel = ({ reverse, color }) => {
  return <StyledBevel reverse={reverse} color={color} />;
};

export default Bevel;
