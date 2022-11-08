import { List as MUIList, Typography } from '@mui/material';
import UserOverviewItem from './UserOverviewItem';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import paths from '@routes/paths';
import { useSelector } from 'react-redux';
import { selectUsersState } from '@redux/selectors/users';
import UsersListLoading from './loading/UsersListLoading';

const List = styled(MUIList)({
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
});

const UsersList = () => {
  const params = useParams();
  const { users, loading, error } = useSelector(selectUsersState);

  if (loading) return <UsersListLoading />;

  if (!loading && !!error)
    return <Typography>Something went wrong</Typography>;

  return (
    <List disablePadding>
      {users?.map((user) => (
        <UserOverviewItem
          key={user.id}
          imgSrc={user.photo}
          imgAlt={`${user?.name} profile photo`}
          userName={user?.name}
          userEmail={user?.email}
          active={params?.id === user.id}
          to={`${paths.management.userManagement}/${user.id}`}
          replace
        />
      ))}
    </List>
  );
};

export default UsersList;
