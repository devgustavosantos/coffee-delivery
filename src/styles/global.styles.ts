import { createGlobalStyle } from 'styled-components';

import { BREAKPOINTS } from './breakpoints';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html#page {
    font-size: 6.25%; //16px
  }

  body#body,
  input,
  button,
  textarea {
    color: ${({ theme }) => theme.BASE_800};
    outline: none;
    font-size: 16rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body#body {
    width: 100%;
    background-color: ${({ theme }) => theme.BASE_200};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.BASE_1000};
  }

  button {
    border: none;
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a,
  label {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button,
  a,
  input,
  label {
    &:disabled {
      filter: brightness(0.8);

      &:hover {
        cursor: not-allowed;
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  a:visited {
    color: inherit;
  }

  svg {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
  }

  @media only screen and (min-width: ${BREAKPOINTS.EXTRA_LARGE}) {
    html#page {
      font-size: max(6.25%, 0.056vw);
    }
  }
`;
