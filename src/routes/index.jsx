import managementRoutes from './management';
import rootRoutes from './root';

const routes = [
  {
    path: '/',
    children: rootRoutes,
  },
  {
    path: 'management',
    children: managementRoutes,
  },
];

export { routes };
