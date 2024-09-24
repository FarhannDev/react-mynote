import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/todo.css';
import './assets/styles/index.css';
import { ToastContainer } from 'react-toastify';

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
