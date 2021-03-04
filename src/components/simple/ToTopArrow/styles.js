import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledToTopArrow = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: fixed;
  z-index: 1;
  bottom: 1rem;
  left: 2rem;
  animation: appear 300ms ease;

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
