import { ProductProvider } from '@/contexts/Product';

import { RootProps } from './Root.types';

export function Root({ children, className }: RootProps) {
  return (
    <ProductProvider>
      <div {...(className && { className: className })}>{children}</div>
    </ProductProvider>
  );
}
