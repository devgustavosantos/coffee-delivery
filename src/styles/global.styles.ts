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
  textarea,
  .Toastify__toast-body div {
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

  .Toastify {
    &__progress-bar {
      &--warning {
        background: ${({ theme }) => theme.PRIMARY_800};
      }

      &--success {
        background: ${({ theme }) => theme.SECONDARY_800};
      }
    }

    &__toast--success {
      .Toastify__toast-icon {
        /* This filter changes the color of the svg to #8047F8 */
        filter: brightness(0) saturate(100%) invert(34%) sepia(91%) saturate(4396%) hue-rotate(248deg) brightness(100%) contrast(95%);
      }
    }
  }

  .swal2-popup.swal2-modal {
    &.swal2-icon-warning, &.swal2-icon-question {
      font-size: 16rem;
      width: 512rem;
    }
  }

  .swal2-icon.swal2-icon-show {
    &.swal2-question,&.swal2-warning {
      margin: 16rem auto 0;
    }
  }

  #swal2-title {
    padding-top: 4rem;
  }

  .swal2-container.swal2-center.swal2-backdrop-show {
    padding: 16rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.EXTRA_LARGE}) {
    html#page {
      font-size: max(6.25%, 0.056vw);
    }

    .Toastify__toast-container {
      width: 320rem;
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    #swal2-html-container {
      font-size: 14rem;
    }
  }
`;
