import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledToTopArrow = styled.div`
  @keyframes toUp {
    0% {
      transform: translateY(0rem);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0rem);
    }
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: fixed;
  bottom: 1rem;
  left: 2rem;
  z-index: 1;
  animation: appear 500ms ease;

  :hover {
    svg {
      animation: toUp 1000ms infinite;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 6rem;
    display: none;

    ${breakpoint('lg')`
      display: inline;
    `}
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default StyledToTopArrow;
