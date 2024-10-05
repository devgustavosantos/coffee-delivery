import { useCartContext } from '@/contexts';

import * as S from './Checkout.styles';
import { Content } from './Content';
import { Empty } from './Empty';

export function Checkout() {
  const { items } = useCartContext();

  return (
    <S.CheckoutContainer>
      {items.length === 0 ? <Empty /> : <Content />}
    </S.CheckoutContainer>
  );
}
