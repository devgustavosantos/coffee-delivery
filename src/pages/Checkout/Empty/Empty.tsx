import * as S from './Empty.styles';

export function Empty() {
  return (
    <S.EmptyContainer>
      <S.EmptyIcon weight="fill" />
      <S.Title>Carrinho Vazio!</S.Title>
      <S.Description>Adicione produtos e volte aqui!</S.Description>
      <S.CustomLink to="/">Página Inicial</S.CustomLink>
    </S.EmptyContainer>
  );
}
