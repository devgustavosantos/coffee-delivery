import { useFormContext } from '@/contexts';

import { Address } from '../Address';
import { Payment } from '../Payment';
import { Summary } from '../Summary';
import { CONTENT_INFOS } from './Content.infos';
import * as S from './Content.styles';

const { PRIMARY_TITLE, SECONDARY_TITLE } = CONTENT_INFOS;

export function Content() {
  const { handleSubmit, onSubmit } = useFormContext();

  return (
    <S.ContentContainer>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <S.LeftSide>
          <S.PrimaryTitle>{PRIMARY_TITLE}</S.PrimaryTitle>
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
          <S.SecondaryTitle>{SECONDARY_TITLE}</S.SecondaryTitle>
          <S.ProductsSection>
            <Summary />
          </S.ProductsSection>
        </S.RightSide>
      </S.FormWrapper>
    </S.ContentContainer>
  );
}
