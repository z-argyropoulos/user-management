import { Box as MUIBox, Typography, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

const RightCardContainer = styled(MUIBox)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const UserDetails = () => {
  const params = useParams();
  const userId = params?.id;

  return (
    <RightCardContainer>
      {!!userId ? (
        <Typography>User form</Typography>
      ) : (
        <Typography>Select a user to edit</Typography>
      )}
    </RightCardContainer>
  );
};

export default UserDetails;
