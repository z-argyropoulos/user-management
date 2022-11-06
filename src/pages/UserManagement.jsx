import UsersList from '@components/UsersList';
import {
  Grid as MUIGrid,
  CardContent as MUICardContent,
  styled,
  Typography,
} from '@mui/material';

const CardContent = styled(MUICardContent)({
  height: '100%',
  display: 'flex',
  flexBasis: '50%',
  padding: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
});

const Grid = styled(MUIGrid)({
  height: '100%',
});

const UserManagement = () => {
  return (
    <CardContent>
      <Grid container>
        <Grid item tablet={6}>
          <UsersList />
        </Grid>
        <Grid item tablet={6}>
          <Typography align="center" marginTop={4}>
            Select user to edit
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default UserManagement;
