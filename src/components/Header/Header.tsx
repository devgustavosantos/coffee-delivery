import { Wrapper } from '@/styles';

import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';
import * as S from './Header.styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.Wrapping>
        <Wrapper>
          <HeaderDesktop />
          <HeaderMobile />
        </Wrapper>
      </S.Wrapping>
    </S.HeaderContainer>
  );
}
