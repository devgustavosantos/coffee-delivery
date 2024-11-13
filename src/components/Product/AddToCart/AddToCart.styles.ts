import { styled } from 'styled-components';

import { ShoppingCartSimple } from '@phosphor-icons/react';

const AddToCartContainer = styled.button`
  display: grid;
  place-items: center;
  width: 38rem;
  height: 38rem;
  padding: 8rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.SECONDARY_900};
`;

const ShoppingCartSimpleCustom = styled(ShoppingCartSimple)`
  color: ${({ theme }) => theme.BASE_300};
  font-size: 20rem;
`;

export { AddToCartContainer, ShoppingCartSimpleCustom };
