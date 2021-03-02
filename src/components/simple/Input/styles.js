import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  padding: 0 0 0.5rem 1.5rem;
  margin-top: 2rem;
  align-self: flex-start;

  ${breakpoint('md')`
    font-size: 2rem;
    padding: 0 0 0.5rem 4rem;
  `}
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: auto;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.blue};
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  outline: none;
  position: relative;
  ${({ errorMsg, theme }) =>
    errorMsg &&
    css`
      border: 3px solid ${theme.colors.error};
    `}

  ${breakpoint('sm')`
    width: 95%;
  `}

  ${breakpoint('md')`
    width: 90%;
    font-size: 2.2rem;
  `}

  ::placeholder {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  margin: auto;
  font-size: 2.1rem;
  color: ${({ theme }) => theme.colors.blue};
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  outline: none;
  resize: none;
  height: 12rem;
  z-index: 1;
  position: relative;
  transition: border 300ms;

  ${({ errorMsg, theme }) =>
    errorMsg &&
    css`
      border: 3px solid ${theme.colors.error};
    `}

  ${breakpoint('sm')`
    width: 95%;
  `}

  ${breakpoint('md')`
    width: 90%;
    font-size: 2.2rem;
  `}
  
  ::placeholder {
    color: ${({ theme }) => theme.colors.blue};
    font-family: Roboto, sans-serif;
    font-size: inherit;
  }
`;

export const StyledErrorMsg = styled.div`
  @keyframes loader {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  color: ${({ theme }) => theme.colors.error};
  margin: 0.5rem 0 0 3.5rem;
  align-self: flex-start;
  font-size: 1.6rem;
  animation: loader 500ms ease;
`;
