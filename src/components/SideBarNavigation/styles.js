import styled, { css } from 'styled-components';

export const StyledWrapper = styled.aside`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateX(100vw);
  transition: 500ms;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transform: translateX(0);
      transition: 0.5s;
    `}
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

    @media screen and (orientation: landscape) {
      margin-bottom: 1.5rem;
    }

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

      @media (hover: hover) {
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }
`;
