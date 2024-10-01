import { ProductProvider } from '@/contexts/Product';

import { RootProps } from './Root.types';

export function Root({ children, quantityAvailable, className }: RootProps) {
  return (
    <ProductProvider quantityAvailable={quantityAvailable}>
      <div {...(className && { className: className })}>{children}</div>
    </ProductProvider>
  );
}
