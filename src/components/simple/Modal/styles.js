import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledModalWrapper = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: appear 300ms ease;
`;

export const StyledModal = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.blue};
  box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 1rem;

  @media screen and (max-height: 660px) and (orientation: landscape) {
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 2rem;
    text-align: center;
    font-size: 3rem;
    z-index: 1;
  }

  h3 {
    font-size: 2.5rem;

    @media screen and (max-height: 660px) and (orientation: landscape) {
      display: none;
    }
  }

  img {
    max-height: 10rem;
    z-index: 1;
  }

  svg {
    position: absolute;
    align-self: center;
    margin-bottom: -10rem;
    margin-left: -2rem;
    font-size: 25rem;
    opacity: 0.4;
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(20deg);
    z-index: 0;

    @media screen and (max-height: 660px) and (orientation: landscape) {
      display: none;
    }

    ${breakpoint('md')`
       font-size: 30rem;
    `}
  }
`;
