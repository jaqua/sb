import { FC } from 'react';
import TextField from '@mui/material/TextField';

export interface InputBoxProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const InputBox: FC<InputBoxProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
  fullWidth = false,
  ...props
}) => (
  <TextField
    {...props}
    label={label}
    value={value}
    onChange={(event) => onChange?.(event.target.value)}
    error={error}
    helperText={helperText}
    fullWidth={fullWidth}
  />
);

export default InputBox;
