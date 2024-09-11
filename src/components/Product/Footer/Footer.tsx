import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

export function Footer({ children }: FooterProps) {
  return <S.FooterContainer>{children}</S.FooterContainer>;
}
