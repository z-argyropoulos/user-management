import { Avatar, styled } from '@mui/material';

const imgDimensions = {
  sm: { height: 32, width: 32 },
  md: { height: 64, width: 64 },
  lg: { height: 128, width: 128 },
};

const UserAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'size',
})(({ size = 'md' }) => ({
  width: imgDimensions[size].height,
  height: imgDimensions[size].width,
}));

export default UserAvatar;
