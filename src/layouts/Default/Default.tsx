import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/components';

import * as S from './Default.styles';

export function Default() {
  return (
    <S.DefaultContainer>
      <Header />
      <Outlet />
      <Footer />
    </S.DefaultContainer>
  );
}
