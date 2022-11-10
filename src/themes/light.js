import { mergeThemeWithBase } from './base';

const blue = {
  300: '#8db4d9',
  500: '#1b68b3',
};

const grey = {
  300: '#f7f7f7',
  400: '#ececec',
  500: '#e8e8e8',
};

const lightTheme = mergeThemeWithBase({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[300],
      contrastText: '#000',
    },
    background: {
      default: 'whitesmoke',
    },
    action: {
      hover: grey[500],
      disabledBackground: blue[300],
      disabled: '#fff',
    },
  },
});

export default lightTheme;
