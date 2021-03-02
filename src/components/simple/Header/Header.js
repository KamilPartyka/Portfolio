import React from 'react';

import PropTypes from 'prop-types';

import { StyledWrapper, StyledHeader } from './styles';

const Header = ({ title, secondary }) => (
  <StyledWrapper secondary={secondary}>
    <StyledHeader secondary={secondary}>{title}</StyledHeader>
  </StyledWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};
Header.defaultProps = {
  secondary: false,
};

export default Header;
