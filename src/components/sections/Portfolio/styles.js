import styled, {css} from 'styled-components';

export const StyledWrapper = styled.section`
  ${({ theme }) => css`
    margin: 0;
    margin-top: -${({ theme }) => theme.bacelHeight.mobile};
    background-color: ${({ theme }) => theme.colors.blue};

    ${theme.breakpoints.up('lg')} {
      margin-top: -${({ theme }) => theme.bacelHeight.desktop};
    }
  `}
`;

export const StyledSvgWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 1px;

    svg {
      display: none;
    }

    ${theme.breakpoints.up('md')} {
      svg {
        display: block;
        font-size: 20rem;
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.4;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 2rem;
      }
    }
  `}
`;

export const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      max-width: 1520px;
      margin: 0 auto;
      width: 80%;
      padding: 5rem 0;
    }

    > div {
      position: relative;
      padding-top: ${({ theme }) => theme.bacelHeight.mobile};

      #fileIcon {
        position: absolute;
        top: 5rem;
        right: 18rem;

        font-size: 12rem;
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.4;

        transform: rotate(20deg);

        ${theme.breakpoints.up('md')} {
          top: 3rem;
          font-size: 15rem;
          right: 22rem;
        }

        ${theme.breakpoints.up('xl')} {
          font-size: 15rem;
          right: 25rem;
        }
      }
    }
  `}
`;

export const StyledItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    ${theme.breakpoints.up('sm')} {
      margin: 4rem;
    }

    ${theme.breakpoints.up('md')} {
      margin: 0;
      flex-direction: row;
    } ;
  `}
`;
