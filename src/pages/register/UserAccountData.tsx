import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';
import { useRegister } from '../../contexts/Register';

const UserAccount = () => {
  const { user, errors, handleChange } = useRegister();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label='Name'
            required
            value={user.name}
            helperText={errors.name?.[0]}
            onChange={(e) => handleChange('name', e.currentTarget.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Email'
            type='email'
            required
            value={user.email}
            helperText={errors.email?.[0]}
            onChange={(e) => handleChange('email', e.currentTarget.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Password'
            type='password'
            required
            value={user.password}
            helperText={errors.password?.[0]}
            onChange={(e) => handleChange('password', e.currentTarget.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Password Confirmation'
            type='password'
            required
            value={user.passwordConfirmation}
            helperText={errors.passwordConfirmation?.[0]}
            onChange={(e) =>
              handleChange('passwordConfirmation', e.currentTarget.value)
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserAccount;
