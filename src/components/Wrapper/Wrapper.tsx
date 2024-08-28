import * as S from './Wrapper.styles';
import { WrapperProps } from './Wrapper.types';

export function Wrapper({ children, stylization }: WrapperProps) {
  return (
    <S.WrapperContainer stylization={stylization}>
      {children}
    </S.WrapperContainer>
  );
}
