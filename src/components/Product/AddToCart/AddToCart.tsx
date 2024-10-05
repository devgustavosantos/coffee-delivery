import { ButtonHTMLAttributes } from 'react';

import * as S from './AddToCart.styles';

export function AddToCart(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <S.AddToCartContainer {...props}>
      <S.ShoppingCartSimpleCustom weight="fill" />
    </S.AddToCartContainer>
  );
}
