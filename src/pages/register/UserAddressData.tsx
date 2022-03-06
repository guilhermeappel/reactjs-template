import React from 'react';
import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';

const UserAddressData = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label='Street Address'
            required
            value=''
            onChange={() => {}}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField label='Nº' required value='' onChange={() => {}} />
        </Grid>
        <Grid container item xs={6}>
          <TextField label='Address Complement' value='' onChange={() => {}} />
        </Grid>

        <Grid container item xs={12}>
          <TextField
            label='Neighborhood'
            required
            value=''
            onChange={() => {}}
          />
        </Grid>

        <Grid container item xs={12}>
          <TextField label='City' required value='' onChange={() => {}} />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Federative Unit'
            required
            value=''
            onChange={() => {}}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField label='CEP' required value='' onChange={() => {}} />
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(UserAddressData);
