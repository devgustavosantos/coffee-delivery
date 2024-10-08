import { Product as ProductBase } from '@/components/';

import { useProduct } from './Product.hook';
import * as S from './Product.styles';

export function Product() {
  const product = useProduct();

  if (!product) return null;

  const {
    handleProductRemove,
    handleProductQuantity,
    productInfosOnCart,
    total,
  } = product;

  return (
    <S.ProductRootCustom>
      <ProductBase.Image />
      <ProductBase.Name />
      <ProductBase.Price value={total} />
      <ProductBase.QuantitySelector
        currentQuantity={productInfosOnCart.currentQuantity}
        onIncrement={() => handleProductQuantity(true)}
        onDecrement={() => handleProductQuantity(false)}
      />
      <ProductBase.RemoveFromCart onClick={() => handleProductRemove()} />
    </S.ProductRootCustom>
  );
}
