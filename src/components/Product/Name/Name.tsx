import * as S from './Name.styles';
import { NameProps } from './Name.types';

export function Name({ content }: NameProps) {
  return <S.NameContainer>{content}</S.NameContainer>;
}
