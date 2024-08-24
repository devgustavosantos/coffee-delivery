// eslint-disable-next-line import-helpers/order-imports
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

const HeaderDesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: none;
  }
`;

const Logo = styled.img`
  max-height: 40rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 12rem;
`;

const ListItem = styled.li`
  padding: 8rem;
  height: 38rem;
  border-radius: 6rem;
  display: flex;
  align-items: center;
`;

const LocationItem = styled(ListItem)`
  background-color: ${({ theme }) => theme.SECONDARY_700};
`;

const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 4rem;
  color: ${({ theme }) => theme.SECONDARY_900};
`;

const MapPinCustom = styled(MapPin)`
  color: ${({ theme }) => theme.SECONDARY_800};
  font-size: 22rem;
`;

const CartItem = styled(ListItem)`
  background-color: ${({ theme }) => theme.PRIMARY_700};
`;

const CartLink = styled.a`
  display: flex;
  align-items: center;
`;

const ShoppingCartCustom = styled(ShoppingCart)`
  color: ${({ theme }) => theme.PRIMARY_900};
  font-size: 22rem;
`;

export {
  HeaderDesktopContainer,
  Logo,
  List,
  LocationItem,
  LocationContainer,
  MapPinCustom,
  CartItem,
  CartLink,
  ShoppingCartCustom,
};
