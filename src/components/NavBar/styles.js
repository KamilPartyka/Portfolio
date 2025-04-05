import styled from 'styled-components';

export const StyledWrapper = styled.header`
  display: none;
  margin: 0;
  width: 100%;
  justify-content: flex-end;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    display: flex;
  }
`;
export const StyledListWrapper = styled.nav`
  padding: 3rem 2rem 0 0;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    padding-right: 5rem;

    button {
      border: none;
      background-color: transparent;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 3rem;
      line-height: 3.5rem;
      color: ${({ theme }) => theme.colors.white};
      outline: none;
      transition: color 200ms;

      :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }
`;
