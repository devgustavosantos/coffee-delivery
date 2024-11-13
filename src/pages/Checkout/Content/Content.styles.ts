import { css, styled } from 'styled-components';

import { BREAKPOINTS, Wrapper } from '@/styles';

const ContentContainer = styled(Wrapper)`
  width: 100%;
  flex-grow: 1;
`;

const FormWrapper = styled.form`
  display: flex;
  gap: clamp(20rem, 3vw - 10rem, 32rem);

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    flex-direction: column;
    align-items: stretch;
    width: min(660rem, 100%);
    margin-inline: auto;
    gap: 32rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    max-width: initial;
  }
`;

const LeftSide = styled.div`
  max-width: 640rem;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.LARGE}) {
    max-width: initial;
  }
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

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 20rem;
  }
`;

const PrimaryTitle = styled.h1`
  ${titleStyles}
`;

const DefaultSection = styled.section`
  background-color: ${({ theme }) => theme.BASE_300};
  padding: clamp(28rem, 3vw - 2rem, 40rem);
  border-radius: 6rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    padding: clamp(16rem, 7vw - 10rem, 28rem);
  }
`;

const SecondaryTitle = styled.h2`
  ${titleStyles}
`;

const ProductsSection = styled(DefaultSection)`
  border-radius: 6rem 44rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    border-radius: 3rem 22rem;
  }
`;

export {
  ContentContainer,
  FormWrapper,
  LeftSide,
  RightSide,
  SectionContainer,
  PrimaryTitle,
  DefaultSection,
  SecondaryTitle,
  ProductsSection,
};
