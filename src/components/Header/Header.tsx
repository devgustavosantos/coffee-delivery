import { Wrapper } from '../Wrapper';
import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';
import * as S from './Header.styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <Wrapper>
        <HeaderDesktop />
        <HeaderMobile />
      </Wrapper>
    </S.HeaderContainer>
  );
}
