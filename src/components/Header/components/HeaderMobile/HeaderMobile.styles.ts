import { styled, css } from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import {
  HouseLine,
  List,
  MapPin,
  ShoppingCart,
  X,
} from '@phosphor-icons/react';

import { pseudoElementWithShadow } from '../../Header.styles';
import { HeaderMobileProps } from './HeaderMobile.types';

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
  max-width: 120rem;
  width: 100%;
  aspect-ratio: 120/32;
`;

const MenuButton = styled.button`
  width: 28rem;
  height: 28rem;
  font-size: 28rem;
  color: ${({ theme }) => theme.SECONDARY_900};
  position: relative;
`;

const iconStyles = css`
  color: inherit;
  font-size: inherit;
`;

const iconsMenuButton = css`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  transition: opacity 0.4s;
`;

const ListCustom = styled(List)<HeaderMobileProps>`
  ${iconStyles}
  ${iconsMenuButton}
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
`;

const XCustom = styled(X)<HeaderMobileProps>`
  ${iconStyles}
  ${iconsMenuButton}
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

const navigationOpen = css`
  height: auto;
  margin-top: 20rem;
  opacity: 1;

  &::after {
    ${pseudoElementWithShadow}
    height: 10rem;
    background: ${({ theme }) => theme.BASE_200};
    position: absolute;
    bottom: 0rem;
  }
`;

const navigationClosed = css`
  height: 0;
  opacity: 0;
  margin-top: 0;
  overflow: hidden;
`;

const Navigation = styled.nav<HeaderMobileProps>`
  ${({ isOpen }) => (isOpen ? navigationOpen : navigationClosed)};
  transition: opacity 0.8s;
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
