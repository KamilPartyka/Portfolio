import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.section`
  margin: 0;
  margin-top: -${({ theme }) => theme.bacelHeight.mobile};
  background-color: ${({ theme }) => theme.colors.blue};

  ${breakpoint('lg')`
    margin-top: -${({ theme }) => theme.bacelHeight.desktop};
  `}
`;

export const StyledSvgWrapper = styled.div`
  position: relative;
  height: 1px;

  svg {
    display: none;
  }

  ${breakpoint('md')`
    svg {
      display: block;
      font-size: 20rem;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.4;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 2rem;
    }
  `}
`;

export const StyledInnerWrapper = styled.div`
  ${breakpoint('md')`
    max-width: 1520px;
    margin: 0 auto;
    width: 80%;
    padding: 5rem 0;
  `}

  > div {
    position: relative;
    padding-top: ${({ theme }) => theme.bacelHeight.mobile};

    #fileIcon {
      position: absolute;
      top: 5rem;
      right: 18rem;

      font-size: 12rem;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.3;

      transform: rotate(20deg);

      ${breakpoint('md')`
        top: 3rem;
        font-size: 15rem;
        right: 22rem;
      `};

      ${breakpoint('xl')`
        font-size: 15rem;
        right: 25rem;
      `};
    }
  }
`;

export const StyledItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  ${breakpoint('sm')`
   margin: 4rem;
  `}

  ${breakpoint('md')`
   margin: 0;
    flex-direction: row;
  `};
`;
