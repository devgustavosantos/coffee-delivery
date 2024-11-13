import { EMPTY_INFOS } from './Empty.infos';
import * as S from './Empty.styles';

const { TITLE, DESCRIPTION, LINK } = EMPTY_INFOS;

export function Empty() {
  return (
    <S.EmptyContainer>
      <S.EmptyIcon weight="fill" />
      <S.Title>{TITLE}</S.Title>
      <S.Description>{DESCRIPTION}</S.Description>
      <S.CustomLink to="/">{LINK}</S.CustomLink>
    </S.EmptyContainer>
  );
}
