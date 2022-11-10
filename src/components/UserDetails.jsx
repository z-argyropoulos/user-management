import { Box as MUIBox, Typography, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import UserInfoForm from '@components/forms/UserInfoForm';

const RightCardContainer = styled(MUIBox)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('tablet')]: {
    padding: theme.spacing(4),
  },
  width: '100%',
  height: '100%',
  overflowY: 'auto',
}));

const UserDetails = () => {
  const params = useParams();
  const userId = params?.id;

  return (
    <RightCardContainer>
      {!!userId ? (
        <UserInfoForm />
      ) : (
        <Typography textAlign="center">
          Select a user to edit
        </Typography>
      )}
    </RightCardContainer>
  );
};

export default UserDetails;
