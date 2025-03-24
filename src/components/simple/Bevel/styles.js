import styled, { css } from 'styled-components';

const StyledBevel = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.bacelHeight.mobile};

    background-color: ${({ isBlue }) =>
      isBlue ? theme.colors.blue : theme.colors.gray};

    clip-path: ${({ isReverse }) =>
      isReverse
        ? css`
          polygon(100% 0, 0 0, 0 100%);
        `
        : css`
          polygon(100% 100%, 100% 0, 100% 0, 0 100%);
        `};

    ${theme.breakpoints.up('lg')} {
      height: ${theme.bacelHeight.desktop};
    }
  `}
`;

export default StyledBevel;
