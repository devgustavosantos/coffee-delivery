import { useProductContext } from '@/contexts';

import * as S from './Name.styles';
import { NameProps } from './Name.types';

export function Name({ emphasized }: NameProps) {
  const { infos } = useProductContext();

  return (
    <S.NameContainer emphasized={emphasized}>{infos.name}</S.NameContainer>
  );
}
