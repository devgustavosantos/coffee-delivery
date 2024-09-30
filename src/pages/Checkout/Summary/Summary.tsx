import { Product } from '@/components';

import { cartExample } from './Summary.data';
import * as S from './Summary.styles';

export function Summary() {
  return (
    <S.SummaryContainer>
      <S.ProductsContainer>
        {cartExample.map(({ productId, image, name, value }) => (
          <S.ProductRootCustom key={productId}>
            <Product.Image
              src={`products/images/${image}.png`}
              alt=""
            />
            <Product.Name content={name} />
            <Product.Price value={value} />
            <Product.QuantitySelector />
            <Product.RemoveFromCart />
          </S.ProductRootCustom>
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
