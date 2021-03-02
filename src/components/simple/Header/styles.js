import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ secondary }) =>
    secondary ? css`flex-end` : css`flex-start`};
`;

export const StyledHeader = styled.h2`
  font-size: 3rem;
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
    bottom: 10%;
    z-index: -1;
  }

  ${breakpoint('md')`
    font-size: 4rem;
`}

  ${breakpoint('xl')`
    font-size: 5rem;
`}
`;
