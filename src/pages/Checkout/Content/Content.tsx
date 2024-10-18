import { useFormContext } from '@/contexts';

import { Address } from '../Address';
import { Payment } from '../Payment';
import { Summary } from '../Summary';
import * as S from './Content.styles';

export function Content() {
  const { handleSubmit, onSubmit } = useFormContext();

  return (
    <S.ContentContainer>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <S.LeftSide>
          <S.PrimaryTitle>Complete seu pedido</S.PrimaryTitle>
          <S.SectionContainer>
            <S.DefaultSection>
              <Address />
            </S.DefaultSection>
            <S.DefaultSection>
              <Payment />
            </S.DefaultSection>
          </S.SectionContainer>
        </S.LeftSide>
        <S.RightSide>
          <S.SecondaryTitle>Cafés Selecionados</S.SecondaryTitle>
          <S.ProductsSection>
            <Summary />
          </S.ProductsSection>
        </S.RightSide>
      </S.FormWrapper>
    </S.ContentContainer>
  );
}
