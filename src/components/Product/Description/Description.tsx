import { useProductContext } from '@/contexts';

import * as S from './Description.styles';

export function Description() {
  const { infos } = useProductContext();

  return <S.DescriptionContainer>{infos.description}</S.DescriptionContainer>;
}
