import { ImgHTMLAttributes } from 'react';

import * as S from './Image.styles';

export function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <S.ImageContainer {...props} />;
}
