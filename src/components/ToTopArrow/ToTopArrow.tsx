import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';

import { StyledToTopArrow } from './styles';

const ToTopArrow = () => (
  <StyledToTopArrow>
    <button type="button" title="Back to top" onClick={() => scrollTo('#hero', 'start')}>
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </button>
  </StyledToTopArrow>
);

export default ToTopArrow;
