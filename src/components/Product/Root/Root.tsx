import * as S from './Root.styles';
import { RootProps } from './Root.types';

export function Root({ children }: RootProps) {
  return <S.RootContainer>{children}</S.RootContainer>;
}
