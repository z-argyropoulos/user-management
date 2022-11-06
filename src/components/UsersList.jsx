import { Box as MUIBox, List as MUIList } from '@mui/material';
import UserOverviewItem from './UserOverviewItem';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import initialUsers from '@models/users';
import paths from '@routes/paths';

const List = styled(MUIList)({
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
});

const UsersList = ({ users = initialUsers }) => {
  const params = useParams();

  return (
    <List disablePadding>
      {users.map((user) => (
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
