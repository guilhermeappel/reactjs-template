import { useState } from 'react';
import { Grid } from '@mui/material';

import { Card } from '../../components/surfaces';
import { Link } from '../../components/navigations';
import { TextField } from '../../components/inputs';
import { Container } from '../../components/layouts';
import { ErrorLabel } from '../../components/typography';
import { LoadingButton } from '../../components/buttons';

import { useAuth } from '../../contexts/Auth';
import { UserCredentials } from '../../models/user';

const initialState: UserCredentials = {
  email: '',
  password: '',
};

const Login = () => {
  const { errors, login } = useAuth();

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (key: keyof UserCredentials, value: string) => {
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    setLoading(true);

    login(user);

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Card>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label='Email'
                type='email'
                value={user.email}
                disabled={loading}
                required
                helperText={errors.email?.[0]}
                onChange={(e) => handleChange('email', e.currentTarget.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Password'
                type='password'
                value={user.password}
                disabled={loading}
                required
                helperText={errors.password?.[0]}
                onChange={(e) =>
                  handleChange('password', e.currentTarget.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <ErrorLabel text={errors.invalidLogin?.[0]} />
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                size='large'
                type='submit'
                description='SIGN IN'
                loading={loading}
              />
            </Grid>

            <Grid container item xs={6}>
              <Link
                href='/forgot-password'
                description='Forgot Password'
                disabled={loading}
              />
            </Grid>
            <Grid container item xs={6} justifyContent='flex-end'>
              <Link
                href='/register'
                description='Register'
                disabled={loading}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </form>
  );
};

export default Login;
