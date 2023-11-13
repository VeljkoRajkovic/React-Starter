import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import { NotFound } from '../pages/NotFound/NotFound';
import { Home } from '../pages/Home/Home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
