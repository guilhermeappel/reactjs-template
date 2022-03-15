import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

const TextField = ({ helperText, ...rest }: TextFieldProps) => {
  return (
    <MuiTextField
      fullWidth
      variant='outlined'
      error={!!helperText}
      helperText={helperText}
      {...rest}
    />
  );
};

export default TextField;
