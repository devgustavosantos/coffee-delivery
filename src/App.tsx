import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { COLORS, Styles } from './styles';

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styles />
      <Router />
    </ThemeProvider>
  );
}
