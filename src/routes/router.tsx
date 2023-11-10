import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import { NotFound } from '../pages/NotFound/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
