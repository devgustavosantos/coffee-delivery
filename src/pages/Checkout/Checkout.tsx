import * as S from './Checkout.styles';
import { Form } from './Form';

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <S.CheckoutWrapper>
        <S.LeftSide>
          <S.PrimaryTitle>Complete seu pedido</S.PrimaryTitle>
          <S.SectionContainer>
            <S.DefaultSection>
              <Form />
            </S.DefaultSection>
            <S.DefaultSection>Payment</S.DefaultSection>
          </S.SectionContainer>
        </S.LeftSide>
        <S.RightSide>
          <S.SecondaryTitle>Cafés Selecionados</S.SecondaryTitle>
          <S.CoffeesSection>Coffees</S.CoffeesSection>
        </S.RightSide>
      </S.CheckoutWrapper>
    </S.CheckoutContainer>
  );
}
