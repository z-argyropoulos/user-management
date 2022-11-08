import ReactDOM from 'react-dom/client';
import { routes } from '@routes/index';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import themes from '@themes/index';
import ReduxProvider from '@providers/ReduxProvider';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={themes.light}>
    <CssBaseline />
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  </ThemeProvider>
);
