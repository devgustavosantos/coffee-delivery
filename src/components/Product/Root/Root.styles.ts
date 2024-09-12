import { styled } from 'styled-components';

import { BREAKPOINTS, COLORS } from '@/styles';

import { RootContainerProps } from './Root.types';

const rootCardStyles = /*css*/ `
  background-color: ${COLORS.BASE_300};
  padding: 0 20rem 20rem;
  max-width: 256rem;
  border-radius: 6rem 36rem 6rem 36rem;
  line-height: 130%;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    scale: 1.2;
    max-width: 80%;
  }
`;

const RootContainer = styled.article<RootContainerProps>`
  ${({ inCardFormat }) => inCardFormat && rootCardStyles};
`;

const Wrapping = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20rem;
`;

export { RootContainer, Wrapping };
