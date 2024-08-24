import largeLogo from '@/assets/logo/large.svg';

import * as S from './HeaderDesktop.styles';

export function HeaderDesktop() {
  return (
    <S.HeaderDesktopContainer>
      <a href="/">
        <S.Logo
          src={largeLogo}
          alt=""
        />
      </a>
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
