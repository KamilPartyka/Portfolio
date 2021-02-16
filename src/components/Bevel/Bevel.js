import React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledBevel = styled.div`
  height: 12rem;
  width: 100%;
  position: relative;
  clip-path: polygon(100% 100%, 100% 0, 100% 0, 0 100%);

  background-color: ${({ theme }) => theme.colors.gray};

  ${breakpoint('xs')`
    height: 5rem;
  `};
`;

const Bevel = () => {
  return (
    <>
      <StyledBevel></StyledBevel>
    </>
  );
};

export default Bevel;
