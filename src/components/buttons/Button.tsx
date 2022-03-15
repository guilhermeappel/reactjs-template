import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './../../models/button';

const Button = ({
  variant = 'contained',
  description,
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton fullWidth variant={variant} {...rest}>
      {description}
    </MuiButton>
  );
};

export default Button;
