import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledBevel = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.bacelHeight.mobile};

  background-color: ${({ isBlue }) =>
    isBlue
      ? css`
          ${({ theme }) => theme.colors.blue};
        `
      : css`
          ${({ theme }) => theme.colors.gray};
        `};

  clip-path: ${({ isReverse }) =>
    isReverse
      ? css`
          polygon(100% 0, 0 0, 0 100%);
        `
      : css`
          polygon(100% 100%, 100% 0, 100% 0, 0 100%);
        `};

  ${breakpoint('lg')`
    height: ${({ theme }) => theme.bacelHeight.desktop};
  `}
`;

export default StyledBevel;
