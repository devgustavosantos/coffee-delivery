import { css, styled } from 'styled-components';

import { Wrapper } from '@/styles';

const CheckoutContainer = styled.main`
  padding-block: 40rem;
  flex-grow: 1;
`;

const CheckoutWrapper = styled(Wrapper)`
  display: flex;
  gap: 32rem;
`;

const LeftSide = styled.div`
  max-width: 640rem;
  width: 100%;
`;

const RightSide = styled.div`
  flex-grow: 1;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12rem;
`;

const titleStyles = css`
  font-size: 18rem;
  font-weight: 800;
  margin-bottom: 15rem;
`;

const PrimaryTitle = styled.h1`
  ${titleStyles}
`;

const DefaultSection = styled.section`
  background-color: ${({ theme }) => theme.BASE_300};
  padding: 40rem;
  border-radius: 6rem;
`;

const SecondaryTitle = styled.h2`
  ${titleStyles}
`;

const CoffeesSection = styled(DefaultSection)`
  border-radius: 6rem 44rem;
`;

const SectionTop = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-areas:
    'A B'
    'C D';
  column-gap: 8rem;
`;
const SectionTitle = styled.h3`
  grid-area: B;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.BASE_900};
  line-height: 130%;
`;

const SectionDescription = styled.p`
  grid-area: D;
  font-size: 14rem;
  color: ${({ theme }) => theme.BASE_800};
`;

const iconSectionStyles = css`
  font-size: 22rem;
  grid-area: A;
`;

export {
  CheckoutContainer,
  CheckoutWrapper,
  LeftSide,
  RightSide,
  SectionContainer,
  PrimaryTitle,
  DefaultSection,
  SecondaryTitle,
  CoffeesSection,
  SectionTop,
  SectionTitle,
  SectionDescription,
  iconSectionStyles,
};
