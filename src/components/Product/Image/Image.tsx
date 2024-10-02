import { useProductContext } from '@/contexts';

import * as S from './Image.styles';

export function Image() {
  const { infos } = useProductContext();

  return (
    <S.ImageContainer
      src={`products/images/${infos.image}.png`}
      alt={`Foto de uma xícara de café do tipo ${infos.name}`}
    />
  );
}
