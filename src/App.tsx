import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { COLORS, Global, Reset } from './styles';

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Reset />
      <Global />
      <Router />
    </ThemeProvider>
  );
}
