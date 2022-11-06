import managementRoutes from './routes/management';
import rootRoutes from './routes/root';

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
