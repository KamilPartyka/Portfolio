import React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledBevel = styled.div`
  width: 100%;
  position: relative;
  clip-path: polygon(100% 100%, 100% 0, 100% 0, 0 100%);
  height: ${({ theme }) => theme.bacelHeight.mobile};
  background-color: ${({ theme }) => theme.colors.gray};

  ${breakpoint('md')`
    height: ${({ theme }) => theme.bacelHeight.desktop};
  `}
`;

const Bevel = () => {
  return <StyledBevel />;
};

export default Bevel;
