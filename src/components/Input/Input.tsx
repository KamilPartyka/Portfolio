import React from 'react';

import {
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledErrorMsg,
} from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isTextarea?: boolean;
  label: string;
  maxLength?: number;
  errorMsg?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input = ({
  isTextarea = false,
  label,
  name,
  placeholder,
  maxLength = 40,
  errorMsg = '',
  onChange,
  value = '',
}: InputProps) => (
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

export default Input;
