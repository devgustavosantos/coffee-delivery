import { ProductProvider } from '@/contexts';

import { RootProps } from './Root.types';

export function Root({ children, quantityAvailable, className }: RootProps) {
  return (
    <ProductProvider quantityAvailable={quantityAvailable}>
      <div {...(className && { className: className })}>{children}</div>
    </ProductProvider>
  );
}
