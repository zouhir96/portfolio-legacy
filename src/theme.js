import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(24, 49, 108, 0.7)',
    },
    secondary: {
      main: 'rgba(24, 49, 108, 0.7)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
