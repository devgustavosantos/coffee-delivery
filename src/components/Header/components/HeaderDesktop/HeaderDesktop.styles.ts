import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

const HeaderDesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: none;
  }
`;

const LinkCustom = styled(Link)`
  max-width: 85rem;
  width: 100%;
  aspect-ratio: 85 / 40;
`;

const Logo = styled.img`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 12rem;
`;

const ListItem = styled.li`
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
  padding: 8rem;
  color: ${({ theme }) => theme.SECONDARY_900};
`;

const MapPinCustom = styled(MapPin)`
  color: ${({ theme }) => theme.SECONDARY_800};
  font-size: 22rem;
`;

const CartItem = styled(ListItem)`
  background-color: ${({ theme }) => theme.PRIMARY_700};
`;

const CartLink = styled(Link)`
  padding: 8rem;
  display: flex;
  align-items: center;
`;

const ShoppingCartCustom = styled(ShoppingCart)`
  color: ${({ theme }) => theme.PRIMARY_900};
  font-size: 22rem;
`;

export {
  HeaderDesktopContainer,
  LinkCustom,
  Logo,
  List,
  LocationItem,
  LocationContainer,
  MapPinCustom,
  CartItem,
  CartLink,
  ShoppingCartCustom,
};
