import React from 'react';
import { MenuItem, Select as MuiSelect } from '@mui/material';

import { SelectItem } from '../../models/select';

interface Props {
  id?: string;
  label?: string;
  value: string | number;
  options: SelectItem[];
  onChange: () => void;
}

const Select = ({ options, ...rest }: Props) => {
  return (
    <MuiSelect fullWidth {...rest}>
      {options.map(({ value, description }) => (
        <MenuItem key={value} value={value}>
          {description}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

export default React.memo(Select);
