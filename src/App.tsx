import { ThemeProvider } from 'styled-components';

import { CartProvider, StockProvider } from './contexts';
import { Router } from './Router';
import { COLORS, Styles } from './styles';

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styles />
      <StockProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </StockProvider>
    </ThemeProvider>
  );
}
