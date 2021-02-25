import React from 'react';

import PropTypes from 'prop-types';

import { StyledBevel } from './styled';

const Bevel = ({ isReverse, isBlue }) => {
  return <StyledBevel isReverse={isReverse} isBlue={isBlue} />;
};

Bevel.propTypes = {
  isReverse: PropTypes.bool,
  isBlue: PropTypes.bool,
};

Bevel.defaultProps = {
  isReverse: false,
  isBlue: false,
};

export default Bevel;
