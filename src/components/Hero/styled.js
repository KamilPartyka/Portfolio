import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  height: calc(100vh - 12rem);
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -10rem;

  h1 {
    margin: 3rem 0 1.5rem 0;
    font-family: Cambo;
    font-style: normal;
    font-weight: normal;
    font-size: 6.5rem;
    line-height: 7.3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  h2 {
    margin: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 5.6rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.yellow};
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
    width: 25rem;
    height: 25rem;
    filter: drop-shadow(3px 4px 5px rgba(0, 0, 0, 0.1));
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
      font-size: 8rem;
      color: ${({ theme }) => theme.colors.white};
      transition: color 200ms;

      :hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }
`;
