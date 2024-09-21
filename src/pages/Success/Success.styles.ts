import { styled } from 'styled-components';

import { BadgeContainer } from '@/components/Badge/Badge.styles';
import { Wrapper } from '@/styles';

const SuccessContainer = styled.main`
  padding-block: 40rem;
  flex-grow: 1;
`;

const SuccessWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20rem;
`;

const Title = styled.h1`
  font-size: 32rem;
  font-weight: 900;
  color: ${({ theme }) => theme.PRIMARY_900};
`;

const Description = styled.p`
  font-size: 20rem;
  margin-top: 4rem;
`;

const InfosContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32rem;
  margin-top: 40rem;
  padding: 40rem;
  border: 1rem solid transparent;
  border-radius: 6rem 36rem;
  background: ${({ theme }) => theme.BASE_200};
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1rem;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.PRIMARY_900} 0,
      ${({ theme }) => theme.SECONDARY_900} 100%
    );
  }
`;

const InfoItem = styled.article`
  display: grid;
  column-gap: 12rem;
  grid-template-columns: 32rem 1fr;
  grid-template-rows: repeat(2, 20rem);
  grid-template-areas:
    'A B'
    'A C';

  /* stylelint-disable-next-line */
  ${BadgeContainer} {
    grid-area: A;
  }
`;

const InfoTitle = styled.p`
  grid-area: B;
  line-height: 100%;
`;

const InfoContent = styled.strong`
  grid-area: C;
  font-weight: 700;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  SuccessContainer,
  SuccessWrapper,
  Title,
  Description,
  InfosContainer,
  InfoItem,
  InfoTitle,
  InfoContent,
};
