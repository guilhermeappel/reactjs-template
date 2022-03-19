import Grid from '@mui/material/Grid';

import { DatePicker, TextField } from '../../components/inputs';
import { Select } from '../../components/selects';

import { useRegister } from '../../contexts/Register';
import { SelectItem } from '../../models/select';
import { UserType } from '../../models/user';

const userTypes: SelectItem[] = [
  { value: UserType.Natural, description: 'Natural Person' },
  { value: UserType.Legal, description: 'Legal Person' },
];

const UserPersonalData = () => {
  const { user, errors, handleChange } = useRegister();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Select
            value={user.type}
            onChange={(e) => handleChange('type', e.target.value)}
            options={userTypes}
          />
        </Grid>

        {user.type === UserType.Natural ? (
          <>
            <Grid container item xs={6}>
              <TextField
                label='RG'
                required
                value={user.identityDocument}
                helperText={errors.identityDocument?.[0]}
                onChange={(e) =>
                  handleChange('identityDocument', e.currentTarget.value)
                }
              />
            </Grid>
            <Grid container item xs={6}>
              <TextField
                label='CPF'
                required
                value={user.cpfCnpj}
                helperText={errors.cpfCnpj?.[0]}
                onChange={(e) => handleChange('cpfCnpj', e.currentTarget.value)}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <TextField
                label='CNPJ'
                required
                value={user.cpfCnpj}
                helperText={errors.cpfCnpj?.[0]}
                onChange={(e) => handleChange('cpfCnpj', e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Responsible Name'
                required
                value={user.responsibleName}
                helperText={errors.responsibleName?.[0]}
                onChange={(e) =>
                  handleChange('responsibleName', e.currentTarget.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Responsible CPF'
                required
                value={user.responsibleCpf}
                helperText={errors.responsibleCpf?.[0]}
                onChange={(e) =>
                  handleChange('responsibleCpf', e.currentTarget.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='State Registration'
                required
                value={user.stateRegistration}
                helperText={errors.stateRegistration?.[0]}
                onChange={(e) =>
                  handleChange('stateRegistration', e.currentTarget.value)
                }
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <DatePicker
            label='Birthdate'
            value={user.birthdate}
            onChange={(date) => handleChange('birthdate', date)}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Cell Phone'
            required
            value={user.cellPhone}
            helperText={errors.cellPhone?.[0]}
            onChange={(e) => handleChange('cellPhone', e.currentTarget.value)}
          />
        </Grid>

        <Grid container item xs={6}>
          <TextField
            label='Phone'
            value={user.phone}
            helperText={errors.phone?.[0]}
            onChange={(e) => handleChange('phone', e.currentTarget.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserPersonalData;
