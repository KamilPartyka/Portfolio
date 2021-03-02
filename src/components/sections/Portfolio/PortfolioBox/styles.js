import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StyledWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  z-index: 1;

  ${breakpoint('md')`
    padding: 1vw;
    width: calc(100% / 2);
  `}
  ${breakpoint('xxl')`
    padding: 1vw;
    width: calc(100% / 3);
  `}
`;

export const StyledInnerWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);

  :hover {
    #hover {
      opacity: 1;
      background: rgba(254, 231, 75, 0.9);
      height: 100%;
    }
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
`;

export const StyledImage = styled.div`
  width: 100%;
  padding-bottom: 60%;
  background-position: 0 center;
  background-size: cover;
  background-image: url('${({ imgSrc }) => imgSrc}');
  background-position: center;
`;

export const StyledHover = styled.div`
  display: none;

  ${breakpoint('md')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    height: 0;
    background: transparent;
    transition: height 0.5s, opacity 0.3s, background-color 0.7s;

    display: flex;
    align-items: center;
    justify-content: center;   

      svg {
        font-size: 6rem;
        color: ${({ theme }) => theme.colors.dark};
        margin: 3rem;
        transition: transform 0.5s;
        
          :hover{
            transform: translateY(-10px);
          }
      }
  `}
  ${breakpoint('lg')`
    svg {
      font-size: 8rem;
      margin: 5rem;
    }
  `}
`;

export const StyledText = styled.div`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.gray};

  p {
    margin: 0.5rem 0;
    font-size: 1.7rem;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.colors.white};

    ${breakpoint('lg')`
      font-size: 2rem;
    `}
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2rem;

    ${breakpoint('md')`
      display: none; 
    `}

    svg {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.lightYellow};
      filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));
    }
  }
`;
