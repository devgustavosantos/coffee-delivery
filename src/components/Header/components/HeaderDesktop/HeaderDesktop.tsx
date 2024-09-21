import { logoLarge } from '@/assets';

import * as S from './HeaderDesktop.styles';

export function HeaderDesktop() {
  return (
    <S.HeaderDesktopContainer>
      <S.LinkCustom to="/">
        <S.Logo
          src={logoLarge}
          alt=""
        />
      </S.LinkCustom>
      <S.List>
        <S.LocationItem>
          <S.LocationContainer>
            <S.MapPinCustom weight="fill" /> São Paulo, SP
          </S.LocationContainer>
        </S.LocationItem>
        <S.CartItem>
          <S.CartLink to="/checkout">
            <S.ShoppingCartCustom weight="fill" />
          </S.CartLink>
        </S.CartItem>
      </S.List>
    </S.HeaderDesktopContainer>
  );
}
