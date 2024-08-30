import { css, styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

const Section = styled.section`
  background: #ffffff url('/src/assets/home/background.png') no-repeat center;
  background-size: cover;

  &::before,
  &::after {
    content: '';
    height: 50rem;
    display: block;
  }

  &::before {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.BASE_200},
      transparent
    );
    margin-bottom: 50rem;
  }

  &::after {
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.BASE_200},
      transparent
    );
    margin-top: 50rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    &::before {
      margin-bottom: 26rem;
    }

    &::after {
      margin-top: 26rem;
    }
  }
`;

const bannerWrapperStylization = css`
  display: grid;
  grid-template-areas:
    'A B'
    'C B';
  column-gap: 18rem;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 32rem;
  }
`;

const Contents = styled.div`
  grid-area: A;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 48rem;
  line-height: 130%;

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    text-align: center;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 32rem;
  }
`;

const Description = styled.p`
  font-size: 20rem;
  line-height: 130%;
  margin-top: 16rem;

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    text-align: center;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 18rem;
  }
`;

const BenefitsContainer = styled.div`
  grid-area: C;
  margin-top: 66rem;
  display: grid;
  grid-template-areas:
    'A B'
    'C D';
  grid-template-columns: 232rem 1fr;
  column-gap: 40rem;
  row-gap: 20rem;

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: flex;
    flex-direction: column;
    gap: 18rem;
    width: fit-content;
  }
`;

const benefitsAreasStyles = ['A', 'B', 'C', 'D']
  .map(
    (area, index) => /* css */ `
      &:nth-child(${index + 1}) {
        grid-area: ${area};
      }
    `,
  )
  .join('');

const Benefit = styled.article`
  display: flex;
  align-items: center;
  gap: 12rem;
  font-size: 16rem;

  ${benefitsAreasStyles}

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    justify-content: center;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: inline-flex;
    width: fit-content;
    gap: 22rem;
    font-size: 14rem;
  }
`;

const Banner = styled.img`
  grid-area: B;
  aspect-ratio: 48 / 36;
  width: clamp(360rem, 35vw, 476rem);

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    max-width: 476rem;
    width: 100%;
  }
`;

export {
  Section,
  bannerWrapperStylization,
  Contents,
  Title,
  Description,
  BenefitsContainer,
  Benefit,
  Banner,
};
