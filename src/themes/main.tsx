import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#273EB2',
    },
    neutral: {
      main: '#78849E',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input:hover + fieldset': {
            border: '1px solid #78849E',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #78849E',
          },
          '& .MuiInputBase-input:focus + fieldset': {
            border: `2px solid #273EB2`,
          },
        },
      },
    },
  },
});
