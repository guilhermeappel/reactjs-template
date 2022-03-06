import React from 'react';
import { Box as MuiBox, Container as MuiContainer } from '@mui/material';

interface Props {
  children?: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <MuiContainer>
      <MuiBox
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {children}
      </MuiBox>
    </MuiContainer>
  );
};

export default React.memo(Container);
