import styled, { css } from 'styled-components';

const StyledBevel = styled.div<{ isReverse?: boolean; color: 'blue' | 'gray' }>`
  ${({ theme, isReverse, color }) => css`
    width: 100%;
    height: ${theme.bacelHeight.mobile};

    background-color: ${theme.colors[color]};

    clip-path: ${isReverse
      ? 'polygon(100% 0, 0 0, 0 100%)'
      : 'polygon(100% 100%, 100% 0, 100% 0, 0 100%)'};

    ${theme.breakpoints.up('lg')} {
      height: ${theme.bacelHeight.desktop};
    }
  `}
`;

export default StyledBevel;
