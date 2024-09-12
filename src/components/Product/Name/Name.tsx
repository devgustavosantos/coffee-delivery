import * as S from './Name.styles';
import { NameProps } from './Name.types';

export function Name({ content, emphasized }: NameProps) {
  return <S.NameContainer emphasized={emphasized}>{content}</S.NameContainer>;
}
