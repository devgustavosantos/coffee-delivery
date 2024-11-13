import { useProductContext } from '@/contexts';

import { IMAGE_INFOS } from './Image.infos';
import * as S from './Image.styles';

export function Image() {
  const { infos } = useProductContext();

  return (
    <S.ImageContainer
      src={`products/images/${infos.image}.png`}
      alt={`${IMAGE_INFOS} ${infos.name}`}
    />
  );
}
