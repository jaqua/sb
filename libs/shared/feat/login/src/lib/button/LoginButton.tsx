import React from 'react';
import { Button } from '@mui/material';

export interface LoginButtonProps {
  onClick?: () => void;
  label?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, label = 'Login' }) => (
  <Button variant="contained" color="primary" onClick={onClick}>{label}</Button>
);

export default LoginButton;
