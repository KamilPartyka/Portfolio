import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const StyledFooter = styled.footer`
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
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

    ${breakpoint('md')`
      font-size: 2.5rem;
    `}

    button {
      cursor: pointer;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
      text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
      outline: none;

      ${breakpoint('md')`
      font-size: 2.5rem;
    `}
    }
  }
`;
