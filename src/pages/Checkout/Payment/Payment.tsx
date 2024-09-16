import * as CS from '../Checkout.styles';
import { payments } from './Payment.data';
import * as S from './Payment.styles';

export function Payment() {
  return (
    <S.PaymentContainer>
      <CS.SectionTop>
        <S.CurrencyDollarCustom />
        <CS.SectionTitle>Pagamento</CS.SectionTitle>
        <CS.SectionDescription>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </CS.SectionDescription>
      </CS.SectionTop>
      <S.MethodsContainer>
        {payments.map(({ type, icon: Icon }) => (
          <S.PaymentMethod htmlFor={type}>
            <S.PaymentInput
              type="radio"
              id={type}
              value={type}
              name="payment-method"
            />
            <Icon />
            <S.PaymentType>{type}</S.PaymentType>
          </S.PaymentMethod>
        ))}
      </S.MethodsContainer>
    </S.PaymentContainer>
  );
}
