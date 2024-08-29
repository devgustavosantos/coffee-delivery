import { Wrapper } from '../Wrapper';
import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';
import { useHeader } from './Header.hook';
import * as S from './Header.styles';

export function Header() {
  const { headerContainer, isSticked } = useHeader();
  return (
    <S.HeaderContainer
      ref={headerContainer}
      isSticked={isSticked}
    >
      <Wrapper>
        <HeaderDesktop />
        <HeaderMobile />
      </Wrapper>
    </S.HeaderContainer>
  );
}
