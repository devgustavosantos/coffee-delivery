import { css, styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

const pseudoElementWithShadow = css`
  content: '';
  display: block;
  width: calc(100vw + 10rem);
  left: -5rem;
  box-shadow: 0 5rem 5rem -3rem rgba(0, 0, 0, 0.2);
`;

const HeaderContainer = styled.header`
  --base-height: 10rem;
  --base-top-on-desktop: 97rem;
  --base-top-on-mobile: 54rem;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.BASE_200};

  &::before {
    ${pseudoElementWithShadow}
    height: var(--base-height);
    position: fixed;
    top: var(--base-top-on-desktop);
    z-index: 9;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: var(--base-height);
    background: ${({ theme }) => theme.BASE_200};
    margin-top: calc(var(--base-top-on-desktop) + var(--base-height));
    position: relative;
    z-index: 99;
  }

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    &::before {
      top: var(--base-top-on-mobile);
    }

    &::after {
      margin-top: calc(var(--base-top-on-mobile) + var(--base-height));
    }
  }
`;

const Wrapping = styled.div`
  padding-block: 32rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: ${({ theme }) => theme.BASE_200};
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-block: 16rem;
  }
`;

export { pseudoElementWithShadow, HeaderContainer, Wrapping };
