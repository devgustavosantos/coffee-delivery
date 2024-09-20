import { styled } from 'styled-components';

import { Trash } from '@phosphor-icons/react';

const RemoveFromCartContainer = styled.button`
  background-color: ${({ theme }) => theme.BASE_500};
  border-radius: 6rem;
  padding: 8rem;
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

const TrashCustom = styled(Trash)`
  font-size: 16rem;
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const RemovalText = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.BASE_800};
  text-transform: uppercase;
  font-size: 12rem;
`;

export { RemoveFromCartContainer, TrashCustom, RemovalText };
