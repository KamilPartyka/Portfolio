import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  margin-top: -${({ theme }) => theme.bacelHeight.mobile};

  height: 100vh;

  ${breakpoint('lg')`
    margin-top: -${({ theme }) => theme.bacelHeight.desktop};
  `}
`;

export const StyledInnerWrapper = styled.div`
  padding-top: ${({ theme }) => theme.bacelHeight.mobile};

  ${breakpoint('md')`
    max-width: 1520px;
    margin: 0 auto;
    width: 80%;
  `}

  ${breakpoint('lg')`
    padding-top: calc(${({ theme }) => theme.bacelHeight.desktop} + 2rem);
  `}
`;

export const StyledFormWrapper = styled.div``;

export const StyledForm = styled.form``;
