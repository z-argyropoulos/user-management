import { Link as ReactRouterLink } from 'react-router-dom';
import { styled } from '@mui/material';

// 'Unstyle' react router links and use
// throughout the application
const Link = styled(ReactRouterLink)({
  textDecoration: 'none',
  color: 'unset',
});

const RouterLink = ({ children, ...routerProps }) => {
  return <Link {...routerProps}>{children}</Link>;
};

export default RouterLink;
