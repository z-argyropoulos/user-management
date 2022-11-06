import ReactDOM from 'react-dom/client';
import { routes } from '@routes/index';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import themes from '@themes/index';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={themes.light}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
