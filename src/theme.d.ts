// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}
