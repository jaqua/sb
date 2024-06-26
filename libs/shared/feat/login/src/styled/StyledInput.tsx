import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledInput = styled((props: TextFieldProps) => <TextField {...props} />)(
  ({ theme }) => ({
    marginBottom: '1.5rem !important',
    width: '100%',
    // backgroundColor: theme.palette.primary.main,
    boxSizing: 'border-box',
    '&.MuiInputBase-root': {
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      overflow: 'hidden',
      borderRadius: 8,
      position: 'relative',
      width: '100%',
      border: '2px solid transparent',
      '&.Mui-focused': {
        borderColor: theme.palette.primary.main,
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 .2rem`,
      },
    },
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      ...theme.typography.body1,
      fontWeight: 500,
      color: 'inherit',
      paddingBlock: theme.spacing(1),
      paddingInline: theme.spacing(3),
    },
  })
);


export default StyledInput;
