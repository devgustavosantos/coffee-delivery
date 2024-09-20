import { css, styled } from 'styled-components';

import { PriceContainerProps } from './Price.types';

const containerEmphasizedStyles = css`
  font-size: 14rem;
  font-weight: 400;
`;

const containerSimpleStyles = css`

  font-weight: 800;
  font-size: 16rem;
`;

const PriceContainer = styled.div<PriceContainerProps>`
  ${({ emphasized }) =>
    emphasized ? containerEmphasizedStyles : containerSimpleStyles};
  display: flex;
  gap: 4rem;
  align-items: flex-end;
`;

const emphasizedValueContainer = css`
  font-family: 'Baloo 2', sans-serif;
  font-size: 24rem;
  font-weight: 900;
`;

const simpleValueContainer = css`
  font-weight: inherit;
  font-size: inherit;
`;

const ValueContainer = styled.strong<PriceContainerProps>`
  ${({ emphasized }) =>
    emphasized ? emphasizedValueContainer : simpleValueContainer};
`;

export { PriceContainer, ValueContainer };
