import { styled } from 'styled-components';

import { CurrencyDollar, Icon } from '@phosphor-icons/react';

import { iconSectionStyles } from '../Checkout.styles';

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;

const CurrencyDollarCustom = styled(CurrencyDollar)`
  ${iconSectionStyles}
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const MethodsContainer = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rem;
`;

const PaymentInput = styled.input`
  display: none;
`;

const PaymentMethod = styled.label`
  display: flex;
  align-items: center;
  gap: 12rem;
  padding: 16rem;
  background-color: ${({ theme }) => theme.BASE_500};
  border-radius: 6rem;
  flex-grow: 1;
  border: 1rem solid transparent;

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

export {
  PaymentContainer,
  CurrencyDollarCustom,
  MethodsContainer,
  PaymentMethod,
  getIconCustom,
  PaymentType,
  PaymentInput,
};
