import styled from 'styled-components';

import { Product } from '@/components';
import { ImageContainer } from '@/components/Product/Image/Image.styles';
import { NameContainer } from '@/components/Product/Name/Name.styles';
import { PriceContainer } from '@/components/Product/Price/Price.styles';
import {
  QuantitySelectorContainer,
  CurrentQuantity,
} from '@/components/Product/QuantitySelector/QuantitySelector.styles';
import { BREAKPOINTS } from '@/styles';

const productWrapperAreasStyles = ['A', 'B', 'C', 'D', 'E']
  .map(
    (area, index) => /* css */ `
      > *:nth-child(${index + 1}) {
        grid-area: ${area};
      }
    `,
  )
  .join('');

const ProductRootCustom = styled(Product.Root)`
  display: grid;
  gap: 8rem;
  grid-template-columns: 76rem 72rem 91rem 1fr;
  grid-template-rows: 21rem 32rem;
  grid-template-areas:
    'A B B C'
    'A D E empty';
  padding-block: 24rem;

  &:first-child {
    padding-top: 0;
  }

  &:not(:first-child) {
    border-top: 1rem solid ${({ theme }) => theme.BASE_500};
  }

  ${productWrapperAreasStyles};

  /* stylelint-disable-next-line */
  ${ImageContainer} {
    max-width: 64rem;
    width: 100%;
    aspect-ratio: 1/1;
  }

  /* stylelint-disable-next-line */
  ${NameContainer} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* stylelint-disable-next-line */
  ${PriceContainer} {
    justify-content: flex-end;
  }

  /* stylelint-disable-next-line */
  ${QuantitySelectorContainer} {
    width: 100%;
    height: fit-content;
    margin-left: initial;
  }

  /* stylelint-disable-next-line */
  ${CurrentQuantity} {
    transform: translateY(1rem);
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: clamp(120rem, 35vw - 10rem, 200rem) repeat(2, 1fr);
    grid-template-areas:
      'A A'
      'B C'
      'D E';

    /* stylelint-disable-next-line */
    ${ImageContainer} {
      width: initial;
      max-width: initial;
      height: 100%;
      display: block;
      margin: auto;
    }

    /* stylelint-disable-next-line */
    ${PriceContainer} {
      align-items: flex-start;
    }

    /* stylelint-disable-next-line */
    ${QuantitySelectorContainer} {
      padding: 12rem;
    }
  }
`;

export { ProductRootCustom };
