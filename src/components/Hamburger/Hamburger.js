import React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;

  ${breakpoint('lg')`
    display: none;
  `}

  button {
    border: none;
    background-color: transparent;
    margin: 2rem;
    outline: none;
  }

  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const Hamburger = ({ callbackFn }) => {
  return (
    <StyledWrapper>
      <button onClick={() => callbackFn()}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </StyledWrapper>
  );
};

export default Hamburger;
