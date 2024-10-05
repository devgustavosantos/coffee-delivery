import { Product } from '@/components';
import { ProductProvider, useCartContext } from '@/contexts';

import * as S from './Summary.styles';

export function Summary() {
  const { items } = useCartContext();
  return (
    <S.SummaryContainer>
      <S.ProductsContainer>
        {items.map(({ id }) => (
          <ProductProvider id={id}>
            <S.ProductRootCustom key={id}>
              <Product.Image />
              <Product.Name />
              <Product.Price />
              <Product.QuantitySelector />
              <Product.RemoveFromCart />
            </S.ProductRootCustom>
          </ProductProvider>
        ))}
      </S.ProductsContainer>
      <S.InfosContainer>
        <S.InfoRow>
          <S.InfoItem>Total de Itens</S.InfoItem>
          <S.InfoItem>R$ 29,70</S.InfoItem>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoItem>Entrega</S.InfoItem>
          <S.InfoItem>R$ 3,50</S.InfoItem>
        </S.InfoRow>
        <S.InfoRow>
          <S.TotalInfoItem>Total</S.TotalInfoItem>
          <S.TotalInfoItem>R$ 33,20</S.TotalInfoItem>
        </S.InfoRow>
      </S.InfosContainer>
      <S.ConfirmOrder>Confirmar Pedido</S.ConfirmOrder>
    </S.SummaryContainer>
  );
}
