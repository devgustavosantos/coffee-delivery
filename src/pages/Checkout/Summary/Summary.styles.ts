import { styled } from 'styled-components';

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
  max-height: 308rem;
  overflow-y: auto;

  &:has(> *:nth-child(4)) {
    padding-right: 12rem;
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
  InfosContainer,
  InfoRow,
  InfoItem,
  TotalInfoItem,
  ConfirmOrder,
};
