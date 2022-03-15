import { MenuItem, Select as MuiSelect, SelectProps } from '@mui/material';

import { SelectItem } from '../../models/select';

interface Props extends SelectProps {
  options: SelectItem[];
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

export default Select;
