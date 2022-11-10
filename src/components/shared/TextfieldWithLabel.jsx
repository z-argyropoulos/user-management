import {
  InputLabel,
  OutlinedInput,
  Box,
  styled,
} from '@mui/material';

// Matierial Design system does not provide a label
// outside of the textfield so we will one
// by combining the two components

const Label = styled(InputLabel)(({ theme }) => ({
  marginBlockEnd: theme.spacing(0.5),
}));

const TextfieldWithLabel = ({
  label = 'Field label',
  value,
  onChange,
  ...props
}) => {
  return (
    <Box {...props}>
      <Label>{label}</Label>
      <OutlinedInput fullWidth value={value} onChange={onChange} />
    </Box>
  );
};

export default TextfieldWithLabel;
