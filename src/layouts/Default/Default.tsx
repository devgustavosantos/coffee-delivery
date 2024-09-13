import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/components';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
