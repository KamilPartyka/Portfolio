import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.6rem;
    padding: 0 0 0.5rem 1.5rem;
    margin-top: 2rem;
    align-self: flex-start;

    ${theme.breakpoints.up('md')} {
      font-size: 2rem;
      padding: 0 0 0.5rem 4rem;
    }
  `}
`;

export const StyledInput = styled.input`
  ${({ theme, errorMsg }) => css`
    width: 100%;
    margin: auto;
    font-size: 1.8rem;
    color: ${theme.colors.blue};
    padding: 1rem;
    background: ${theme.colors.white};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    outline: none;
    position: relative;
    ${errorMsg &&
    css`
      border: 3px solid ${theme.colors.error};
    `}

    ${theme.breakpoints.up('sm')} {
      width: 95%;
    }

    ${theme.breakpoints.up('md')} {
      width: 90%;
      font-size: 2rem;
    }

    ::placeholder {
      color: ${theme.colors.blue};
      font-size: 1.7rem;

      ${theme.breakpoints.up('md')} {
        font-size: 2rem;
      }
    }
  `}
`;

export const StyledTextarea = styled.textarea`
  ${({ theme, errorMsg }) => css`
    width: 100%;
    margin: auto;
    font-size: 1.8rem;
    color: ${theme.colors.blue};
    padding: 0.6rem 1rem;
    background: ${theme.colors.white};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    outline: none;
    resize: none;
    height: 12rem;
    z-index: 1;
    position: relative;
    transition: border 300ms;
    font-family: Roboto;

    ${errorMsg &&
    css`
      border: 3px solid ${theme.colors.error};
    `}

    ${theme.breakpoints.up('sm')} {
      width: 95%;
    }

    ${theme.breakpoints.up('md')} {
      width: 90%;
      font-size: 2rem;
    }

    ::placeholder {
      color: ${theme.colors.blue};
      font-size: 1.7rem;

      ${theme.breakpoints.up('md')} {
        font-size: 2rem;
      }
    }
  `}
`;

export const StyledErrorMsg = styled.div`
  ${({ theme }) => css`
    @keyframes loader {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    color: ${theme.colors.error};
    margin: 0.5rem 0 0 0.5rem;
    align-self: flex-start;
    font-size: 1.6rem;
    animation: loader 500ms ease;

    ${theme.breakpoints.up('sm')} {
      margin: 0.5rem 0 0 2rem;
    }

    ${theme.breakpoints.up('md')} {
      margin: 0.5rem 0 0 3.5rem;
    }
  `}
`;
