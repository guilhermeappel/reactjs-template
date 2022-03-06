import React from 'react';
import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';
import { Select } from '../../components/selects';

import { SelectItem } from '../../models/select';
import { UserType } from '../../models/user';

const userTypes: SelectItem[] = [
  { value: UserType.Natural, description: 'Natural Person' },
  { value: UserType.Legal, description: 'Legal Person' },
];

const UserPersonalData = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Select
            value={UserType.Natural}
            onChange={() => {}}
            options={userTypes}
          />
        </Grid>

        {true ? (
          <>
            <Grid container item xs={6}>
              <TextField label='RG' required value='' onChange={() => {}} />
            </Grid>
            <Grid container item xs={6}>
              <TextField label='CPF' required value='' onChange={() => {}} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <TextField label='CNPJ' required value='' onChange={() => {}} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Responsible Name'
                required
                value=''
                onChange={() => {}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Responsible CPF'
                required
                value=''
                onChange={() => {}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='State Registration'
                required
                value=''
                onChange={() => {}}
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <TextField label='Birthday' value='' required onChange={() => {}} />
        </Grid>

        <Grid container item xs={6}>
          <TextField label='Cell Phone' value='' required onChange={() => {}} />
        </Grid>

        <Grid container item xs={6}>
          <TextField label='Phone' value='' onChange={() => {}} />
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(UserPersonalData);
