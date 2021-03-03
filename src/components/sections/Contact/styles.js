import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  margin-top: -${({ theme }) => theme.bacelHeight.mobile};
  padding-bottom: 2rem;

  ${breakpoint('lg')`
    margin-top: -${({ theme }) => theme.bacelHeight.desktop};
  `}
`;

export const StyledInnerWrapper = styled.div`
  padding-top: ${({ theme }) => theme.bacelHeight.mobile};

  ${breakpoint('sm')`
   margin: 0 4rem;
  `}

  ${breakpoint('md')`
    max-width: 1520px;
    margin: 0 auto;
    width: 80%;
  `}

  ${breakpoint('lg')`
    padding-top: calc(${({ theme }) => theme.bacelHeight.desktop} + 2rem);
  `}
`;

export const StyledFormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 2rem;
  margin: 1rem;
  box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;

  ${breakpoint('md')`
    max-width: 600px;
    margin: 0 auto;
  `}
`;

export const StyledForm = styled.form`
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
    opacity: 0.3;
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(-10deg);

    ${breakpoint('sm')`
      font-size: 13rem;
    `}

    ${breakpoint('md')`
      font-size: 16rem;
      right: 1.5rem;
    `}
  }
`;

export const StyledSend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: appear-disappear 3000ms;
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
