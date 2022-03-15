import {
  MobileDatePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { isMobile } from 'react-device-detect';

import { TextField } from './../inputs';

interface Props {
  value: Date;
  label: string;
  onChange: (value: Date | null) => void;
}

const DatePicker = (props: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {isMobile ? (
        <MobileDatePicker
          {...props}
          renderInput={(params) => <TextField {...params} />}
        />
      ) : (
        <DesktopDatePicker
          {...props}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </LocalizationProvider>
  );
};

export default DatePicker;
