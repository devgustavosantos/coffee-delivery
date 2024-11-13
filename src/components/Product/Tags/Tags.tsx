import * as S from './Tags.styles';
import { TagsProps } from './Tags.types';

export function Tags({ children }: TagsProps) {
  return <S.TagsContainer>{children}</S.TagsContainer>;
}
