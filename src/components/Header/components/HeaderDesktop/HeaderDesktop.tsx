import { logoLarge } from '@/assets';

import * as S from './HeaderDesktop.styles';

export function HeaderDesktop() {
  return (
    <S.HeaderDesktopContainer>
      <S.Link href="/">
        <S.Logo
          src={logoLarge}
          alt=""
        />
      </S.Link>
      <S.List>
        <S.LocationItem>
          <S.LocationContainer>
            <S.MapPinCustom weight="fill" /> São Paulo, SP
          </S.LocationContainer>
        </S.LocationItem>
        <S.CartItem>
          <S.CartLink href="/">
            <S.ShoppingCartCustom weight="fill" />
          </S.CartLink>
        </S.CartItem>
      </S.List>
    </S.HeaderDesktopContainer>
  );
}
