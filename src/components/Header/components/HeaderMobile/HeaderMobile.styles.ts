import { styled, css } from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import {
  HouseLine,
  List,
  MapPin,
  ShoppingCart,
  X,
} from '@phosphor-icons/react';

const HeaderMobileContainer = styled.div`
  display: none;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: block;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 124rem;
  height: 32rem;
`;

const MenuButton = styled.button`
  width: 28rem;
  height: 28rem;
  font-size: 28rem;
  color: ${({ theme }) => theme.SECONDARY_900};
`;

const iconStyles = css`
  color: inherit;
  font-size: inherit;
`;

const ListCustom = styled(List)`
  ${iconStyles}
`;

const XCustom = styled(X)`
  ${iconStyles}
`;

const Navigation = styled.nav`
  margin-top: 20rem;
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

const ListLink = styled.a`
  display: flex;
  gap: 8rem;
  align-items: center;
  font-size: 24rem;
`;

const HouseLineCustom = styled(HouseLine)`
  ${iconStyles}
  color: ${({ theme }) => theme.BASE_800};
`;

const MapPinCustom = styled(MapPin)`
  ${iconStyles}
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const ShoppingCartCustom = styled(ShoppingCart)`
  ${iconStyles}
  color: ${({ theme }) => theme.PRIMARY_800};
`;

const ListText = styled.span`
  font-size: 16rem;
`;

export {
  HeaderMobileContainer,
  Top,
  Logo,
  MenuButton,
  ListCustom,
  XCustom,
  Navigation,
  UnorderedList,
  ListLink,
  HouseLineCustom,
  MapPinCustom,
  ShoppingCartCustom,
  ListText,
};
