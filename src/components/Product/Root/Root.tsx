import * as S from './Root.styles';
import { RootProps } from './Root.types';

export function Root({ children, inCardFormat }: RootProps) {
  return (
    <S.RootContainer inCardFormat={inCardFormat}>
      {inCardFormat ? <S.Wrapping>{children}</S.Wrapping> : children}
    </S.RootContainer>
  );
}
