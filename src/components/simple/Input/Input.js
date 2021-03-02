import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledErrorMsg,
} from './styles';

const Input = ({
  isTextarea,
  label,
  name,
  placeholder,
  maxLength,
  errorMsg,
  ...props
}) => {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {isTextarea ? (
        <StyledTextarea
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          errorMsg={errorMsg}
          {...props}
        />
      ) : (
        <StyledInput
          type={name}
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          errorMsg={errorMsg}
          {...props}
        />
      )}
      {errorMsg && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
    </>
  );
};

Input.propTypes = {
  isTextarea: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  isTextarea: false,
  maxLength: 40,
};

export default Input;
