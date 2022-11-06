import { managementPaths } from './routes/management';

// Export paths/links from router paths so the
// links are not hardcoded in the components
// and thus if a change in a link is required you
// can make it here
const paths = {
  management: managementPaths,
};

export default paths;
