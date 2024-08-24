import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

const HeaderContainer = styled.header`
  padding-block: 32rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-block: 16rem;
    border-bottom: 1rem solid ${({ theme }) => theme.BASE_600};
  }
`;

export { HeaderContainer };
