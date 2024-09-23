import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './rootLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      caseSensitive: true,
      children: [
        {
          index: true,
          element: <div>Halaman utama</div>,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
    },
    hydrationData: {
      loaderData: {
        root: 'ROOT DATA',

        // No index data provided
      },
    },
  }
);

export default router;
