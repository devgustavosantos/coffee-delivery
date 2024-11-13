import { Product as ProductBase } from '@/components';

import { useProduct } from './Product.hook';
import * as S from './Product.styles';
import { ProductProps } from './Product.types';

export function Product({ tags }: ProductProps) {
  const { currentQuantity, handleProductQuantity, handleAddToCart, price } =
    useProduct();

  return (
    <S.ProductRootCustom>
      <S.ProductWrapper>
        <ProductBase.Image />
        <ProductBase.Tags>
          {tags?.map((tag) => (
            <ProductBase.Tag
              key={tag.id}
              name={tag.title}
            />
          ))}
        </ProductBase.Tags>
        <ProductBase.Name emphasized />
        <ProductBase.Description />
        <ProductBase.Footer>
          <ProductBase.Price
            emphasized
            value={price}
          />
          <ProductBase.QuantitySelector
            currentQuantity={currentQuantity}
            onIncrement={() => handleProductQuantity(true)}
            onDecrement={() => handleProductQuantity(false)}
          />
          <ProductBase.AddToCart onClick={handleAddToCart} />
        </ProductBase.Footer>
      </S.ProductWrapper>
    </S.ProductRootCustom>
  );
}
