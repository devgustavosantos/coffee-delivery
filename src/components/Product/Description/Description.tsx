import * as S from './Description.styles';
import { DescriptionProps } from './Description.types';

export function Description({ content }: DescriptionProps) {
  return <S.DescriptionContainer>{content}</S.DescriptionContainer>;
}
