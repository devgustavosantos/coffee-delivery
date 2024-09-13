import { HashRouter, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts';
import { Home } from './pages';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
