import { HEADER_MOBILE_INFOS } from './HeaderMobile.infos';
import {
  HouseLineCustom,
  ListCustom,
  MapPinCustom,
  ShoppingCartCustom,
  XCustom,
} from './HeaderMobile.styles';

const { HOME, ADDRESS, CART } = HEADER_MOBILE_INFOS;

const links = [
  { name: HOME, url: '/', icon: HouseLineCustom },
  {
    name: ADDRESS,
    url: '/checkout',
    icon: MapPinCustom,
  },
  {
    name: CART,
    url: '/checkout',
    icon: ShoppingCartCustom,
  },
];

const menus = [XCustom, ListCustom];

export { links, menus };
