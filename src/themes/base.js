import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

const baseThemeProperties = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1200,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.3rem',
    },
    h5: {
      fontSize: '1.1rem',
    },
    h6: {
      fontSize: '0.85rem',
    },
    subtitle1: {
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '40px',
        },
      },
    },
  },
};

// A MUI theme generator that takes a theme object
// merges the properties with the base theme properties
// and then finally creates a theme that can used in the
// MUI context provider
const mergeThemeWithBase = (theme) => {
  return createTheme(deepmerge(theme, baseThemeProperties));
};

export default baseThemeProperties;
export { mergeThemeWithBase };
