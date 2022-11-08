import UsersList from '@components/UsersList';
import UserDetails from '@components/UserDetails';
import {
  Grid as MUIGrid,
  CardContent as MUICardContent,
  styled,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '@redux/actions/users';

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
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch users when component mounts
    dispatch(fetchAllUsers());

    // TODO: clean up / reset state or abort HTTP request
    // as it might throw error when switching routes
    // setting state in component that has been unmounted
    return () => {};
  }, []);

  return (
    <CardContent>
      <Grid container>
        <Grid item tablet={6}>
          <UsersList />
        </Grid>
        <Grid item tablet={6} sx={{ flex: 1 }}>
          <UserDetails />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default UserManagement;
