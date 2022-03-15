import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';
import { useRegister } from '../../contexts/Register';

const UserAccount = () => {
  const { user, handleChange } = useRegister();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label='Name'
            required
            value={user.name}
            onChange={(e) => handleChange('name', e.currentTarget.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Email'
            type='email'
            required
            value={user.email}
            onChange={(e) => handleChange('email', e.currentTarget.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Password'
            type='password'
            required
            value={user.password}
            onChange={(e) => handleChange('password', e.currentTarget.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label='Password Confirmation'
            type='password'
            required
            value={user.passwordConfirmation}
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
