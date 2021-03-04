import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import StyledToTopArrow from './styles';

const ToTopArrow = () => (
  <StyledToTopArrow>
    <button
      type="button"
      title="Contact"
      onClick={() => scrollTo('#hero', 'start')}
    >
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </button>
  </StyledToTopArrow>
);

export default ToTopArrow;
