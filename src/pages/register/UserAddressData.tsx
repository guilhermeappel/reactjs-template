import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';
import { useRegister } from '../../contexts/Register';

const UserAddressData = () => {
  const { user, handleChange } = useRegister();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label='Street Address'
            required
            value={user.address}
            onChange={(e) => handleChange('address', e.currentTarget.value)}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Nº'
            required
            value={user.addressNumber}
            onChange={(e) =>
              handleChange('addressNumber', e.currentTarget.value)
            }
          />
        </Grid>
        <Grid container item xs={6}>
          <TextField
            label='Address Complement'
            value={user.addressComplement}
            onChange={(e) =>
              handleChange('addressComplement', e.currentTarget.value)
            }
          />
        </Grid>

        <Grid container item xs={12}>
          <TextField
            label='Neighborhood'
            required
            value={user.neighborhood}
            onChange={(e) =>
              handleChange('neighborhood', e.currentTarget.value)
            }
          />
        </Grid>

        <Grid container item xs={12}>
          <TextField
            label='City'
            required
            value={user.city}
            onChange={(e) => handleChange('city', e.currentTarget.value)}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Federative Unit'
            required
            value={user.federativeUnit}
            onChange={(e) =>
              handleChange('federativeUnit', e.currentTarget.value)
            }
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='CEP'
            required
            value={user.zipCode}
            onChange={(e) => handleChange('zipCode', e.currentTarget.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserAddressData;
