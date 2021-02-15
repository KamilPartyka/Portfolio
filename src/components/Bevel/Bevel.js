import React from 'react';
import styled, { css } from 'styled-components';

const StyledBevel = styled.div`
  height: 12rem;
  width: 100%;
  position: relative;
  clip-path: ${({ reverse }) =>
    reverse
      ? css`polygon(0 0, 100% 0, 100% 0, 0 100%)`
      : css`polygon(100% 100%, 100% 0, 100% 0, 0 100%)`};

  background-color: ${({ theme, color }) =>
    color ? theme.colors.blue : theme.colors.gray};
`;

const Bevel = ({ color, reverse }) => {
  return (
    <>
      <StyledBevel reverse={reverse} color={color}></StyledBevel>
    </>
  );
};

export default Bevel;
