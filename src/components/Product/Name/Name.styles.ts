import { styled } from 'styled-components';

import { NameProps } from './Name.types';

const emphasizedNameStyles = /*css*/ `
  margin-top: 16rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 20rem;
  line-height: inherit;
  text-align: center;
`;

export const NameContainer = styled.p<NameProps>`
  ${({ emphasized }) => emphasized && emphasizedNameStyles};
`;
