import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoading from '@components/loading/SuspenseLoading';

// Wrap component in suspense and display a
// fallback loading ui while component still
// fetching
const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <Component {...props} />
    </Suspense>
  );
};

// Lazy load pages using react lazy and dynamic import
const UserManagement = SuspenseComponent(
  lazy(() => import('@pages/UserManagement'))
);

const managementRoutes = [
  { path: '', element: <Navigate to="user-management" replace /> },
  {
    path: 'user-management',
    children: [
      {
        path: '',
        element: <UserManagement />,
      },
      {
        path: ':id',
        element: <>Manage user with id</>,
      },
    ],
  },
];

export default managementRoutes;
