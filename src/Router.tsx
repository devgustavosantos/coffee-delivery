import { HashRouter, Route, Routes } from 'react-router-dom';

import { Default } from './layouts';
import { Home } from './pages';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Default />}
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
