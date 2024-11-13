import { useStateMachine } from 'little-state-machine';

import { logoLarge } from '@/assets';
import { useCartContext } from '@/contexts';
import { updateAction } from '@/utils/updateAction';

import * as S from './HeaderDesktop.styles';

export function HeaderDesktop() {
  const {
    totals: { items },
  } = useCartContext();

  const { state } = useStateMachine({ updateAction });

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
            <S.MapPinCustom weight="fill" />
            {state.data && `${state.data.city}, ${state.data.state}`}
          </S.LocationContainer>
        </S.LocationItem>
        <S.CartItem>
          {items >= 1 && (
            <S.ProductsTotalContainer>
              <S.ProductsTotalValue>{items}</S.ProductsTotalValue>
            </S.ProductsTotalContainer>
          )}
          <S.CartLink to="/checkout">
            <S.ShoppingCartCustom weight="fill" />
          </S.CartLink>
        </S.CartItem>
      </S.List>
    </S.HeaderDesktopContainer>
  );
}
