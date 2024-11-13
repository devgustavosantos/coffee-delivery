import { styled } from 'styled-components';

import { Error } from '@/components';
import { BREAKPOINTS } from '@/styles';
import { CurrencyDollar, Icon } from '@phosphor-icons/react';

import { iconSectionStyles } from '../Checkout.styles';
import { PaymentMethodProps } from './Payment.types';

const CurrencyDollarCustom = styled(CurrencyDollar)`
  ${iconSectionStyles}
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const MethodsContainer = styled.fieldset`
  margin-top: 32rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: flex;
    flex-direction: column;
    margin-top: clamp(16rem, 1vw - 10rem, 32rem);
  }
`;

const PaymentInput = styled.input`
  display: none;
`;

const PaymentMethod = styled.label<PaymentMethodProps>`
  display: flex;
  align-items: center;
  gap: 12rem;
  padding: 16rem;
  background-color: ${({ theme, hasErro }) =>
    hasErro ? theme.ERROR_700 : theme.BASE_500};
  border-radius: 6rem;
  flex-grow: 1;
  border: 1rem solid;
  border-color: ${({ hasErro, theme }) =>
    hasErro ? theme.ERROR_900 : 'transparent'};

  /* stylelint-disable-next-line */
  &:has(${PaymentInput}:checked) {
    border-color: ${({ theme }) => theme.SECONDARY_800};
    background-color: ${({ theme }) => theme.SECONDARY_700};
  }
`;

function getIconCustom(icon: Icon) {
  return styled(icon)`
    color: ${({ theme }) => theme.SECONDARY_800};
    font-size: 16rem;
  `;
}

const PaymentType = styled.span`
  font-size: 12rem;
  text-transform: uppercase;
`;

const ErrorCustom = styled(Error)`
  display: block;
  margin-top: 8rem;
  font-size: 12rem;
`;

export {
  CurrencyDollarCustom,
  MethodsContainer,
  PaymentMethod,
  getIconCustom,
  PaymentType,
  PaymentInput,
  ErrorCustom,
};
