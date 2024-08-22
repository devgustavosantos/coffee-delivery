import * as S from './Wrapper.styles';
import { WrapperProps } from './Wrapper.types';

export function Wrapper({ children }: WrapperProps) {
  return <S.WrapperContainer>{children}</S.WrapperContainer>;
}
