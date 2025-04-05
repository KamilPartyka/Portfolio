import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[];
}

const Button = ({ children }: ButtonProps) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
