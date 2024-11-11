import { useStateMachine } from 'little-state-machine';

import { useFormContext } from '@/contexts';
import { updateAction } from '@/utils/updateAction';

import * as CS from '../Checkout.styles';
import { payments } from './Payment.data';
import { PAYMENT_INFOS } from './Payment.infos';
import * as S from './Payment.styles';

const { TITLE, DESCRIPTION, ERROR } = PAYMENT_INFOS;

export function Payment() {
  const { register, errors } = useFormContext();

  const { state } = useStateMachine({ updateAction });

  return (
    <>
      <CS.SectionTop>
        <S.CurrencyDollarCustom />
        <CS.SectionTitle>{TITLE}</CS.SectionTitle>
        <CS.SectionDescription>{DESCRIPTION}</CS.SectionDescription>
      </CS.SectionTop>
      <S.MethodsContainer>
        {payments.map(({ value, label, icon: Icon }) => (
          <S.PaymentMethod
            htmlFor={value}
            key={value}
            hasErro={!!errors.paymentMethod}
          >
            <S.PaymentInput
              type="radio"
              id={value}
              value={value}
              {...register('paymentMethod')}
              {...(state.data && { defaultValue: state.data.paymentMethod })}
            />
            <Icon />
            <S.PaymentType>{label}</S.PaymentType>
          </S.PaymentMethod>
        ))}
      </S.MethodsContainer>
      {errors.paymentMethod && <S.ErrorCustom>{ERROR}</S.ErrorCustom>}
    </>
  );
}
