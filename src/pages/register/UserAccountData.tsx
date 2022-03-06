import React from 'react';
import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';

const UserAccount = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField label='Name' required value='' onChange={() => {}} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Email'
            type='email'
            required
            value=''
            onChange={() => {}}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Password'
            type='password'
            required
            value=''
            onChange={() => {}}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Password Confirmation'
            type='password'
            required
            value=''
            onChange={() => {}}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(UserAccount);
