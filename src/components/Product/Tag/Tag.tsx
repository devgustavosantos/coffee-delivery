import * as S from './Tag.styles';
import { TagProps } from './Tag.types';

export function Tag({ name }: TagProps) {
  return <S.TagContainer>{name}</S.TagContainer>;
}
