import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0;
  height: 60px;
  width: 100%;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;

    color: ${({ theme }) => theme.colors.white};
  }
`;
