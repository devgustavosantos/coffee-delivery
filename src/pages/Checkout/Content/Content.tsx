import { Form } from '../Form';
import { Payment } from '../Payment';
import { Summary } from '../Summary';
import * as S from './Content.styles';

export function Content() {
  return (
    <S.ContentContainer>
      <S.LeftSide>
        <S.PrimaryTitle>Complete seu pedido</S.PrimaryTitle>
        <S.SectionContainer>
          <S.DefaultSection>
            <Form />
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
    </S.ContentContainer>
  );
}
