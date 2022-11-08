import {
  Box as MUIBox,
  Card as MUICard,
  styled,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

const Box = styled(MUIBox)({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
});

const Card = styled(MUICard)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  maxWidth: '1200px',
  backgroundColor: 'white',
  [theme.breakpoints.up('tablet')]: {
    height: '560px',
    margin: '0.5rem 1rem',
  },
}));

const Management = () => {
  return (
    <Box>
      <Card elevation={4}>
        <Outlet />
      </Card>
    </Box>
  );
};

export default Management;
