import React from 'react';

import {
  InputBaseComponentProps,
  TextField as MuiTextField,
} from '@mui/material';

interface Props {
  id?: string;
  label: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  type?: 'text' | 'email' | 'number' | 'password';
  inputProps?: InputBaseComponentProps;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ errorMessage, ...rest }: Props) => {
  return (
    <MuiTextField
      fullWidth
      variant='outlined'
      error={!!errorMessage}
      helperText={errorMessage}
      {...rest}
    />
  );
};

export default React.memo(TextField);
