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
  },
});

export default lightTheme;
