import { css, styled } from 'styled-components';

import { PriceContainerProps } from './Price.types';

const containerEmphasizedStyles = css`
  font-size: 14rem;
`;

const PriceContainer = styled.div<PriceContainerProps>`
  ${({ emphasized }) => emphasized && containerEmphasizedStyles};
  display: flex;
  gap: 4rem;
  align-items: flex-end;
`;

const EmphasizedPrice = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: 24rem;
  font-weight: 900;
`;

const SimplePrice = styled.span``;

export { PriceContainer, EmphasizedPrice, SimplePrice };
