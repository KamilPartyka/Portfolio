import styled, { css } from 'styled-components';

export const StyledWrapper = styled.section`
  padding: 0 0 2rem 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      min-height: 70vh;D
      max-width: 1520px;
      margin: 0 auto;
      width: 80%;
      padding: 5rem 0;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 10rem minmax(30rem, 5fr);
    }

  .gatsby-image-wrapper {
    margin: 0 auto;
    width: 80%;
    max-width: 45rem;
    filter: drop-shadow(0px 11px 11px rgba(0, 0, 0, 0.25));
    border-radius: 0.3rem;

    ${theme.breakpoints.up('md')}{
      grid-column: 2/2;
      grid-row: 1/3;

      margin: 0;
      width: 100%;
      min-width: 25rem;
      max-height: 45rem;
    }

    ${theme.breakpoints.up('xl')} {
      min-width: 40rem;
      max-height: 60rem;
    }
}
`}
`;

export const StyledText = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: 2rem auto;
    width: 90%;
    min-height: 20rem;

    ${theme.breakpoints.up('md')} {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.2rem;
      text-align: justify;
      color: ${({ theme }) => theme.colors.white};
      text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

      ${theme.breakpoints.up('md')} {
        max-width: 70rem;
        font-size: 2.1rem;
        line-height: 2.5rem;
      }

      ${theme.breakpoints.up('xl')} {
        font-size: 2.5rem;
        line-height: 3rem;
      }
    }
    #codeIcon {
      position: absolute;
      bottom: 0;
      left: 0;

      font-size: 20rem;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.3;

      ${theme.breakpoints.up('md')} {
        left: -8rem;
      }

      ${theme.breakpoints.up('xl')} {
        font-size: 30rem;
        left: -11rem;
        bottom: -5rem;
      }
    }
  `}
`;
