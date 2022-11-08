import { Link as ReactRouterLink } from 'react-router-dom';
import { styled } from '@mui/material';
import { forwardRef } from 'react';

// 'Unstyle' react router links and use
// throughout the application
const Link = styled(ReactRouterLink)({
  textDecoration: 'none',
  color: 'unset',
});

const LinkBehavior = forwardRef((props, ref) => (
  <Link ref={ref} {...props} />
));

export default LinkBehavior;
