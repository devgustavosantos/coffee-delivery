import styled from 'styled-components';

import { Product } from '@/components';
import { BREAKPOINTS } from '@/styles';

const ProductRootCustom = styled(Product.Root)`
  background-color: ${({ theme }) => theme.BASE_300};
  padding: 0 20rem 20rem;
  max-width: 256rem;
  border-radius: 6rem 36rem;
  line-height: 130%;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    scale: 1.2;
    max-width: initial;
    width: 80%;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20rem;
`;

export { ProductRootCustom, ProductWrapper };
