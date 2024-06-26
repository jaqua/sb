import React from 'react';
import { Button, styled } from '@mui/material';

export interface LoginButtonProps {
  onClick?: () => void;
  label?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  children?: React.ReactNode;
}

const StyledButton = styled(Button)`
  width: 100%;
  padding: 0.75rem;
  background-color: #3f51b5 !important;
  color: #fff !important;
  &:hover {
    background-color: #303f9f !important;
  }
`;

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  label = 'Login',
  type = 'submit',
  disabled,
  href,
  children,
  ...otherProps
}) => (
  <StyledButton
    {...otherProps}
    href={href || ''}
    type={type}
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
  >
    {children || label}
  </StyledButton>
);

export default LoginButton;
