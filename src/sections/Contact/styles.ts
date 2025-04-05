import styled, { css } from 'styled-components';

export const StyledWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    margin-top: -${theme.bacelHeight.mobile};
    padding-bottom: 2rem;

    ${theme.breakpoints.up('lg')} {
      margin-top: -${theme.bacelHeight.desktop};
    }
  `}
`;

export const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.bacelHeight.mobile};

    ${theme.breakpoints.up('sm')} {
      margin: 0 4rem;
    }

    ${theme.breakpoints.up('md')} {
      max-width: 1520px;
      margin: 0 auto;
      width: 80%;
    }

    ${theme.breakpoints.up('lg')} {
      padding-top: calc(${theme.bacelHeight.desktop} + 2rem);
    }
  `}
`;

export const StyledFormWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    padding: 2rem;
    margin: 1rem;
    box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: relative;

    ${theme.breakpoints.up('md')} {
      max-width: 600px;
      margin: 0 auto;
    }
  `}
`;

export const StyledForm = styled.form`
  ${({ theme }) => css`
    @keyframes appear-disappear {
      0% {
        opacity: 0;
      }
      30% {
        opacity: 1;
      }
      60% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      position: absolute;
      bottom: 0.2rem;
      right: 1rem;
      z-index: 0;
      font-size: 11rem;
      opacity: 0.4;
      color: ${theme.colors.white};
      transform: rotate(-10deg);

      ${theme.breakpoints.up('sm')} {
        font-size: 13rem;
      }

      ${theme.breakpoints.up('md')} {
        font-size: 16rem;
        right: 1.5rem;
      }
    }
  `}
`;

export const StyledSend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: appear-disappear 2000ms;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.lightYellow};

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.dark};
  }
`;
