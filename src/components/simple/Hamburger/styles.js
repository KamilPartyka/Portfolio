import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    display: none;
  }
`;

export const StyledHamburger = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: transparent;
  border: none;
  margin: 1rem;
  display: flex;
  z-index: 1;
  outline: none;
  cursor: pointer;
`;

export const StyledHamburgeBox = styled.span`
  width: 3rem;
  height: 2.4rem;
  position: relative;
`;
export const StyledHamburgeBoxInner = styled.span`
  top: 50%;
  transform: translateY(-50%);
  transition: 300ms;

  &,
  ::after,
  ::before {
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    position: absolute;
    right: 0;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px -1px black;
  }

  ::before {
    content: '';
    top: -10px;
    transition: 500ms;
  }
  ::after {
    content: '';
    top: 10px;
    transition: 500ms;
  }

  ${({ isSideNavActive }) =>
    isSideNavActive &&
    css`
      &,
      ::before,
      ::after {
        box-shadow: none;
      }
      & {
        background-color: transparent;
      }
      ::before {
        transform: translateY(10px) rotate(45deg);
      }
      ::after {
        transform: translateY(-10px) rotate(-45deg);
      }
    `}
`;
