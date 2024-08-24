import {
  HouseLineCustom,
  ListCustom,
  MapPinCustom,
  ShoppingCartCustom,
  XCustom,
} from './HeaderMobile.styles';

const links = [
  { name: 'Início', url: '/', icon: HouseLineCustom },
  { name: 'Endereço', url: '/', icon: MapPinCustom },
  { name: 'Carrinho', url: '/', icon: ShoppingCartCustom },
];

const menus = [XCustom, ListCustom];

export { links, menus };
