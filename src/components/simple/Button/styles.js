import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-size: 1.7rem;
  text-align: center;
  padding: 1.2rem 7rem;
  margin: 2rem 0 5rem 0;
  border: none;
  z-index: 1;
  cursor: pointer;
  transition: background-color 200ms, color 200ms;

  :active {
    outline: none;
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.yellow};
  }
  :focus {
    outline: none;
  }

  ${breakpoint('md')`
      font-size: 2rem;
      margin-top: 3rem;
      padding: 1.5rem 7rem;
    `}
`;

export default StyledButton;
