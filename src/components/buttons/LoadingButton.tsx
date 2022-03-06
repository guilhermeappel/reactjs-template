import React from 'react';
import MuiLoadingButton from '@mui/lab/LoadingButton';
import { ButtonProps } from './../../models/button';

interface Props extends ButtonProps {
  loading: boolean;
  icon?: React.ReactNode;
}

const LoadingButton = ({
  variant = 'contained',
  description,
  icon,
  ...rest
}: Props) => {
  return (
    <MuiLoadingButton
      fullWidth
      endIcon={icon || <></>}
      variant={variant}
      loadingPosition='end'
      {...rest}
    >
      {description}
    </MuiLoadingButton>
  );
};

export default React.memo(LoadingButton);
