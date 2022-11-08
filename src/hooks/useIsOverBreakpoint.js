import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// custom hook that return whether the window
// width has exceeded the provided breakpoint
const useIsOverBreakpoint = (breakpoint) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint));

  return matches;
};

export default useIsOverBreakpoint;
