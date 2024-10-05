import { css, styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

const CheckoutContainer = styled.main`
  padding-block: 40rem;
  flex-grow: 1;
  display: flex;
  align-items: stretch;
`;

const SectionTop = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-areas:
    'A B'
    'C D';
  column-gap: 8rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    row-gap: 8rem;
  }
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

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 12rem;
  }
`;

const iconSectionStyles = css`
  font-size: 22rem;
  grid-area: A;
`;

export {
  CheckoutContainer,
  SectionTop,
  SectionTitle,
  SectionDescription,
  iconSectionStyles,
};
