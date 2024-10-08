import { ProductProvider } from '@/contexts';

import { Product } from '../Product';
import { useSummary } from './Summary.hook';
import * as S from './Summary.styles';

export function Summary() {
  const { totalItemsFormatted, items } = useSummary();

  return (
    <S.SummaryContainer>
      <S.ProductsContainer>
        {items.map(({ id }) => (
          <ProductProvider
            id={id}
            key={id}
          >
            <Product />
          </ProductProvider>
        ))}
      </S.ProductsContainer>
      <S.InfosContainer>
        <S.InfoRow>
          <S.InfoItem>Total de Itens</S.InfoItem>
          <S.InfoItem>R$ {totalItemsFormatted}</S.InfoItem>
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
