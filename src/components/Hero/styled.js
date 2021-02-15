import styled from 'styled-components';
import image from 'images/hero-background.png';

export const StyledWrapper = styled.div`
  margin: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
  background-image: url(${image});
  background-size: cover;
`;
