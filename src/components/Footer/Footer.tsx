import deskTopLogo from '@/assets/logo/large-with-gray-color.svg';
import mobileLogo from '@/assets/logo/with-horizontal-text-and-gray-color.svg';
import { Wrapper } from '@/components';

import * as S from './Footer.styles';

export function Footer() {
  return (
    <S.FooterContainer>
      <Wrapper stylization={S.footerWrapperStyles}>
        <S.DesktopLogo
          src={deskTopLogo}
          alt=""
        />
        <S.MobileLogo
          src={mobileLogo}
          alt=""
        />
        <S.Copyright>© 2024 - Todos os direitos reservados.</S.Copyright>
      </Wrapper>
    </S.FooterContainer>
  );
}
