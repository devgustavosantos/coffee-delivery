import { StateMachineProvider, createStore } from 'little-state-machine';
import { ThemeProvider } from 'styled-components';

import { CartProvider, StockProvider } from './contexts';
import { Router } from './Router';
import { COLORS, Styles } from './styles';

createStore({});

export function App() {
  return (
    <StateMachineProvider>
      <ThemeProvider theme={COLORS}>
        <Styles />
        <StockProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </StockProvider>
      </ThemeProvider>
    </StateMachineProvider>
  );
}
