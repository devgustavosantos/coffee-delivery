import { ProductProvider, useFormContext } from '@/contexts';

import { Product } from '../Product';
import { useSummary } from './Summary.hook';
import { SUMMARY_INFOS } from './Summary.infos';
import * as S from './Summary.styles';

const { ITEMS, SHIPPING, TOTAL, MONEY, CONFIRM } = SUMMARY_INFOS;

export function Summary() {
  const {
    items,
    totalItemsFormatted,
    shippingPriceFormatted,
    totalOrderValueFormatted,
  } = useSummary();

  const { errors } = useFormContext();

  const shouldSubmitDisable = Object.keys(errors).length > 0;

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
          <S.InfoItem>{ITEMS}</S.InfoItem>
          <S.InfoItem>
            {MONEY} {totalItemsFormatted}
          </S.InfoItem>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoItem>{SHIPPING}</S.InfoItem>
          <S.InfoItem>
            {MONEY} {shippingPriceFormatted}
          </S.InfoItem>
        </S.InfoRow>
        <S.InfoRow>
          <S.TotalInfoItem>{TOTAL}</S.TotalInfoItem>
          <S.TotalInfoItem>
            {MONEY} {totalOrderValueFormatted}
          </S.TotalInfoItem>
        </S.InfoRow>
      </S.InfosContainer>
      <S.ConfirmOrder
        type="submit"
        disabled={shouldSubmitDisable}
      >
        {CONFIRM}
      </S.ConfirmOrder>
    </S.SummaryContainer>
  );
}
