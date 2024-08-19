import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { COLORS } from '@/styles/colors.ts';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={COLORS}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
