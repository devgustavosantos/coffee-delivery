import { Wrapper } from '../Wrapper';
import { HeaderDesktop } from './components/HeaderDesktop';
import * as S from './Header.styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <Wrapper>
        <HeaderDesktop />
      </Wrapper>
    </S.HeaderContainer>
  );
}
