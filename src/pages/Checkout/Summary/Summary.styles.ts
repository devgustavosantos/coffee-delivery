import { styled } from 'styled-components';

import { ImageContainer } from '@/components/Product/Image/Image.styles';
import { NameContainer } from '@/components/Product/Name/Name.styles';
import { PriceContainer } from '@/components/Product/Price/Price.styles';
import {
  QuantitySelectorContainer,
  CurrentQuantity,
} from '@/components/Product/QuantitySelector/QuantitySelector.styles';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24rem;
  align-items: stretch;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 308rem;
  overflow-y: auto;

  &:has(> *:nth-child(4)) {
    padding-right: 12rem;
  }
`;

const productWrapperAreasStyles = ['A', 'B', 'C', 'D', 'E']
  .map(
    (area, index) => /* css */ `
      > *:nth-child(${index + 1}) {
        grid-area: ${area};
      }
    `,
  )
  .join('');

const ProductWrapper = styled.div`
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
    width: 64rem;
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
`;

const InfosContainer = styled.div`
  padding-top: 25rem;
  border-top: 1rem solid ${({ theme }) => theme.BASE_500};
  display: flex;
  flex-direction: column;
  gap: 14rem;
`;

const InfoRow = styled.p`
  display: flex;
  justify-content: space-between;
`;

const InfoItem = styled.span`
  font-size: 14rem;
  color: ${({ theme }) => theme.BASE_900};
`;

const TotalInfoItem = styled.span`
  font-weight: 700;
  font-size: 20rem;
  color: ${({ theme }) => theme.BASE_900};
`;

const ConfirmOrder = styled.button`
  background-color: ${({ theme }) => theme.PRIMARY_800};
  color: ${({ theme }) => theme.BASE_100};
  border-radius: 6rem;
  width: 100%;
  padding: 12rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 14rem;
  font-weight: 700;
`;

export {
  SummaryContainer,
  ProductsContainer,
  ProductWrapper,
  InfosContainer,
  InfoRow,
  InfoItem,
  TotalInfoItem,
  ConfirmOrder,
};
