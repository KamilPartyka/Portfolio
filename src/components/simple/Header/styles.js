import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ secondary }) => (secondary ? css`flex-end` : css`flex-start`)};
`;

export const StyledHeader = styled.h2`
  ${({ theme, secondary }) => css`
    font-size: 3rem;
    position: relative;
    display: inline-block;
    z-index: 1;
    margin: 2rem 4rem;
    color: ${theme.colors.dark};

    ::before {
      content: '';
      position: absolute;
      background-color: ${secondary ? theme.colors.yellow : theme.colors.lightYellow};
      width: 100%;
      height: 100%;
      left: ${secondary ? css`2.5rem` : css`-2.5rem`};
      bottom: 10%;
      z-index: -1;
    }

    ${theme.breakpoints.up('md')} {
      font-size: 4rem;

      ::before {
        left: ${secondary ? css`4rem` : css`-4rem`};
      }
    }

    ${theme.breakpoints.up('xl')} {
      font-size: 5rem;
    }
  `}
`;
