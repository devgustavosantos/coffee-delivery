import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

import { WrapperContainerProps } from './Wrapper.types';

export const WrapperContainer = styled.div<WrapperContainerProps>`
  max-width: 1152px;
  padding-inline: 16rem;
  margin: auto;
  ${({ stylization }) => stylization};

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-inline: 12rem;
  }
`;
