import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { COLORS, Reset, Global } from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={COLORS}>
      <Reset />
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
