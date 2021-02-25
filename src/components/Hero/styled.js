import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0;
  height: calc(100vh - ${({ theme }) => theme.bacelHeight.mobile});

  ${breakpoint('lg')`
    height: calc(100vh - ${({ theme }) => theme.bacelHeight.desktop});
  `}

  @media screen and (max-height: 660px) and (orientation: landscape) {
    height: auto;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 0;

  @media screen and (orientation: landscape) {
    margin-top: 4rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.md}) and (orientation: landscape) {
    margin-top: 4rem;
  }

  h1 {
    margin: 3rem 0 1.5rem 0;
    font-family: Cambo;
    font-size: 4rem;
    margin: 1rem 0 0rem 0;
    font-style: normal;
    font-weight: normal;
    line-height: 7.3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    ${breakpoint('md')`
      font-size: 6.5rem;
    `}
  }

  h2 {
    margin: 1rem;
    font-family: Roboto;
    font-size: 3rem;
    margin: 0rem;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.yellow};

    ${breakpoint('md')`
      font-size: 4.8rem;
    `}
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    filter: drop-shadow(3px 4px 5px rgba(0, 0, 0, 0.1));

    ${breakpoint('md')`
      width: 25rem;
      height: 25rem;
    `}
  }
`;

export const StyledIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  a {
    margin: 1.5rem;

    svg {
      font-size: 6rem;
      color: ${({ theme }) => theme.colors.white};
      transition: color 200ms;

      ${breakpoint('md')`
        font-size: 8rem; 
      `}

      @media (hover: hover) {
        :hover {
          cursor: pointer;
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }
`;

export const StyledArrows = styled.div`
  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(2rem);
    }
  }

  font-size: 6rem;
  color: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;

  ${breakpoint('xl')`
    font-size: 7rem; 
  `}

  #arrow1,
  #arrow2 {
    display: block;
    animation: scrollDown 2500ms linear infinite;
  }

  #arrow2 {
    animation-delay: 200ms;
    margin-top: -3.5rem;

    ${breakpoint('xl')`
      margin-top: -4rem;
    `}
  }
`;
