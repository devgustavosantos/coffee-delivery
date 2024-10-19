import { useFormContext } from '@/contexts';

import * as CS from '../Checkout.styles';
import { payments } from './Payment.data';
import * as S from './Payment.styles';

export function Payment() {
  const { register } = useFormContext();

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
        {payments.map(({ value, label, icon: Icon }) => (
          <S.PaymentMethod
            htmlFor={value}
            key={value}
          >
            <S.PaymentInput
              type="radio"
              id={value}
              value={value}
              {...register('paymentMethod')}
            />
            <Icon />
            <S.PaymentType>{label}</S.PaymentType>
          </S.PaymentMethod>
        ))}
      </S.MethodsContainer>
    </S.PaymentContainer>
  );
}
