import { FormProvider, useCartContext } from '@/contexts';

import * as S from './Checkout.styles';
import { Content } from './Content';
import { Empty } from './Empty';

export function Checkout() {
  const {
    totals: { items },
  } = useCartContext();

  return (
    <S.CheckoutContainer>
      {!items ? (
        <Empty />
      ) : (
        <FormProvider>
          <Content />
        </FormProvider>
      )}
    </S.CheckoutContainer>
  );
}
