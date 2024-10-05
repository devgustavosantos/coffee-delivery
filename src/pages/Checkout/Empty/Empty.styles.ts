import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { ShoppingCart } from '@phosphor-icons/react';

const EmptyContainer = styled.section`
  max-width: 600rem;
  margin: auto;
  text-align: center;
`;

const EmptyIcon = styled(ShoppingCart)`
  font-size: 80rem;
  color: ${({ theme }) => theme.BASE_700};
`;

const Title = styled.h1`
  font-size: 24rem;
  font-weight: 700;
  color: ${({ theme }) => theme.BASE_700};
`;

const Description = styled.p`
  font-size: 16rem;
`;

const CustomLink = styled(Link)`
  background-color: ${({ theme }) => theme.PRIMARY_800};
  color: ${({ theme }) => theme.BASE_100};
  display: block;
  margin: 12rem auto 0;
  border-radius: 6rem;
  width: fit-content;
  padding: 12rem 24rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 14rem;
  font-weight: 700;

  &:visited {
    color: ${({ theme }) => theme.BASE_100};
  }
`;

export { EmptyContainer, EmptyIcon, Title, Description, CustomLink };
