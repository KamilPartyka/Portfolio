import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.gray};

  > button {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    background-color: transparent;
    margin: 2rem;
  }
  svg {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const StyledListWrapper = styled.div`
  padding: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledList = styled.ul`
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  li {
    margin-bottom: 5rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 41px;

    button {
      border: none;
      background-color: transparent;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 4rem;
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
