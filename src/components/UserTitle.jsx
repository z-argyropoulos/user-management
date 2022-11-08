import { Box, Typography } from '@mui/material';
import React from 'react';

const UserTitle = ({ title, subtitle }) => {
  return (
    <Box mx={2}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  );
};

export default UserTitle;
