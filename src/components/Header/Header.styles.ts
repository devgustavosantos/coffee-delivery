import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

import { HeaderContainerProps } from './Header.types';

const HeaderContainer = styled.header<HeaderContainerProps>`
  padding-block: 32rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
  background: ${({ theme }) => theme.BASE_200};
  box-shadow: 0 0 20px -10px ${({ theme, isSticked }) => (isSticked ? theme.BASE_700 : 'transparent')};
  transition: box-shadow 0.4s;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-block: 16rem;
  }
`;

export { HeaderContainer };
