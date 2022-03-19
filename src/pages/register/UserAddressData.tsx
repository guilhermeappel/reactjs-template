import Grid from '@mui/material/Grid';

import { TextField } from '../../components/inputs';
import { useRegister } from '../../contexts/Register';

const UserAddressData = () => {
  const { user, errors, handleChange } = useRegister();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label='Street Address'
            required
            value={user.address}
            helperText={errors.address?.[0]}
            onChange={(e) => handleChange('address', e.currentTarget.value)}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Nº'
            required
            value={user.addressNumber}
            helperText={errors.addressNumber?.[0]}
            onChange={(e) =>
              handleChange('addressNumber', e.currentTarget.value)
            }
          />
        </Grid>
        <Grid container item xs={6}>
          <TextField
            label='Address Complement'
            value={user.addressComplement}
            helperText={errors.addressComplement?.[0]}
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
            helperText={errors.neighborhood?.[0]}
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
            helperText={errors.city?.[0]}
            onChange={(e) => handleChange('city', e.currentTarget.value)}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Federative Unit'
            required
            value={user.federativeUnit}
            helperText={errors.federativeUnit?.[0]}
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
            helperText={errors.zipCode?.[0]}
            onChange={(e) => handleChange('zipCode', e.currentTarget.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserAddressData;
