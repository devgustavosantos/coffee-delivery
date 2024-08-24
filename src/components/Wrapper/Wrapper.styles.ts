import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

export const WrapperContainer = styled.div`
  max-width: 1152px;
  padding-inline: 16rem;
  margin: auto;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-inline: 12rem;
  }
`;
