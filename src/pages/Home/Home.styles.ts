import { css, styled } from 'styled-components';

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
`;

const bannerWrapperStylization = css`
  display: flex;
  gap: 56rem;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 48rem;
  line-height: 130%;
`;

const Description = styled.p`
  font-size: 20rem;
  line-height: 130%;
  margin-top: 16rem;
`;

const BenefitsContainer = styled.div`
  margin-top: 66rem;
  display: grid;
  grid-template-areas:
    'A B'
    'C D';
  grid-template-columns: 232rem 1fr;
  column-gap: 40rem;
  row-gap: 20rem;
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

  ${benefitsAreasStyles}
`;

const Banner = styled.img`
  max-width: 476rem;
  aspect-ratio: 48 / 36;
`;

export {
  Section,
  bannerWrapperStylization,
  Title,
  Description,
  BenefitsContainer,
  Benefit,
  Banner,
};
