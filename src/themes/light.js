import { mergeThemeWithBase } from './base';

const lightTheme = mergeThemeWithBase({
  palette: {
    primary: {
      main: '#1b68b3',
      contrastText: '#fff',
    },
    background: {
      default: 'whitesmoke',
    },
    action: {
      hover: '#e8e8e8',
    },
  },
});

export default lightTheme;
