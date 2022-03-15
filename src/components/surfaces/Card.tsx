import React from 'react';
import { Paper as MuiPaper } from '@mui/material';

interface Props {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <MuiPaper square elevation={4} sx={{ padding: 2 }}>
      {children}
    </MuiPaper>
  );
};

export default Card;
