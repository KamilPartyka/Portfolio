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
  onChange,
  value,
}) => (
  <>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    {isTextarea ? (
      <StyledTextarea
        id={name}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        errorMsg={errorMsg}
        onChange={onChange}
        value={value}
      />
    ) : (
      <StyledInput
        type={name}
        id={name}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        errorMsg={errorMsg}
        onChange={onChange}
        value={value}
      />
    )}
    {errorMsg && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
  </>
);

Input.propTypes = {
  isTextarea: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  isTextarea: false,
  maxLength: 40,
  errorMsg: '',
  value: '',
};

export default Input;
