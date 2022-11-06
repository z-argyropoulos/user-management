import { Navigate } from 'react-router-dom';

const rootRoutes = [
  {
    path: '',
    element: <Navigate to="management" replace />,
  },
];

export default rootRoutes;
