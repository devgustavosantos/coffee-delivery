import { styled } from 'styled-components';

import { Minus, Plus } from '@phosphor-icons/react';

const QuantitySelectorContainer = styled.div`
  width: 72rem;
  height: 38rem;
  background-color: ${({ theme }) => theme.BASE_500};
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 8rem 9rem;
  margin-left: 15rem;
`;

const HandleQuantity = styled.button`
  display: grid;
  place-items: center;
`;

const PlusCustom = styled(Plus)`
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const MinusCustom = styled(Minus)`
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const CurrentQuantity = styled.span`
  transform: translateY(2rem);
`;

export {
  QuantitySelectorContainer,
  HandleQuantity,
  PlusCustom,
  MinusCustom,
  CurrentQuantity,
};
