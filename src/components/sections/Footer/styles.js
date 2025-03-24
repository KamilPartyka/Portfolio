import styled, {css} from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;

    p {
      font-family: Cambo;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      text-align: center;
      color: ${theme.colors.white};
      text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

      ${theme.breakpoints.up('md')} {
        font-size: 2.5rem;
      }

      button {
        cursor: pointer;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: ${theme.colors.white};
        text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
        outline: none;

        ${theme.breakpoints.up('md')} {
          font-size: 2.5rem;
        }

        :hover {
          span {
            color: red;
          }
        }
      }

      span {
        color: ${theme.colors.yellow};
        font-size: 1.2em;
        transition: color 200ms;
      }
    }
  `}
`;
