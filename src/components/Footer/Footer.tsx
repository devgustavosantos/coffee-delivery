import { logoLargeGray } from '@/assets';
import { logoHorizontalGray } from '@/assets';

import { FOOTER_INFOS } from './Footer.infos';
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
        <S.Copyright>{FOOTER_INFOS}</S.Copyright>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}
