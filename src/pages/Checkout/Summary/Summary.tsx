import { Product } from '@/components';
import { ProductProvider } from '@/contexts';

import { cartExample } from './Summary.data';
import * as S from './Summary.styles';

export function Summary() {
  return (
    <S.SummaryContainer>
      <S.ProductsContainer>
        {cartExample.map(({ id }) => (
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
