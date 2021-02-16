import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  height: 17rem;
`;

export const StyledFooter = styled.footer`
  font-family: Cambo;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  position: relative;

  p {
    position: absolute;
    right: 2rem;
    bottom: 0.1rem;
  }
`;
