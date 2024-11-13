import { createContext, useContext } from 'react';

import { StockContextType } from './Stock.types';

const StockContext = createContext({} as StockContextType);
const useStockContext = () => useContext(StockContext);

export { StockContext, useStockContext };
export { StockProvider } from './Stock.provider';
