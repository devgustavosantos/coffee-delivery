import {
  HouseLineCustom,
  ListCustom,
  MapPinCustom,
  ShoppingCartCustom,
  XCustom,
} from './HeaderMobile.styles';

const links = [
  { name: 'Início', url: '/', icon: HouseLineCustom },
  { name: 'Endereço', url: '/checkout', icon: MapPinCustom },
  { name: 'Carrinho', url: '/checkout', icon: ShoppingCartCustom },
];

const menus = [XCustom, ListCustom];

export { links, menus };
