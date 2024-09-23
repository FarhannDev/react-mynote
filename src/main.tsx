import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
