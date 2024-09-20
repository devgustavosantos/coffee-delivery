import { HashRouter, Route, Routes } from 'react-router-dom';

import { Default } from './layouts';
import { Checkout, Home } from './pages';

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
          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
