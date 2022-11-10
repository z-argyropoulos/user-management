import { Box, styled } from '@mui/material';

const ButtonsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBlockStart: theme.spacing(6),
  display: 'flex',
  justifyContent: 'flex-end',
  // gap: theme.spacing(1),
}));

const ActionButtonsContainer = ({ children }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

export default ActionButtonsContainer;
