import { logoLargeGray } from '@/assets';
import { logoHorizontalGray } from '@/assets';

import * as S from './Footer.styles';

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.DesktopLogo
          src={logoLargeGray}
          alt=""
        />
        <S.MobileLogo
          src={logoHorizontalGray}
          alt=""
        />
        <S.Copyright>© 2024 - Todos os direitos reservados.</S.Copyright>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}
