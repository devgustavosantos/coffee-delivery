import { styled } from 'styled-components';

import { BREAKPOINTS, Wrapper } from '@/styles';

const FooterContainer = styled.footer`
  border-top: 1rem solid ${({ theme }) => theme.BASE_400};
  padding-block: 32rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-block: 20rem;
  }
`;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    gap: 12rem;
  }
`;

const DesktopLogo = styled.img`
  display: block;
  max-width: 85rem;
  width: 100%;
  aspect-ratio: 85 / 40;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  display: none;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    display: block;
    max-width: 120rem;
    width: 100%;
    aspect-ratio: 120/32;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.BASE_700};

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    font-size: 14rem;
  }
`;

export { FooterContainer, FooterWrapper, DesktopLogo, Copyright, MobileLogo };
