import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0;
  /* margin-top: ${({ theme }) => theme.bacelHeight.desktop}; */
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
`;
