import { css, styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import { MapPinLine } from '@phosphor-icons/react';

import { iconSectionStyles } from '../Checkout.styles';

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 32rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    gap: clamp(16rem, 1vw - 10rem, 32rem);
  }
`;

const MapPinLineCustom = styled(MapPinLine)`
  ${iconSectionStyles}
  color: ${({ theme }) => theme.PRIMARY_900};
`;

const AddressInputs = styled.div`
  display: grid;
  grid-template-columns: clamp(160rem, 15vw - 10rem, 200rem) 1fr 60rem;
  grid-template-areas:
    'A empty empty'
    'B B B'
    'C D D'
    'E F G';
  gap: 12rem;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-template-columns: 1fr 84rem;
    grid-template-areas:
      'A empty'
      'B C'
      'D D'
      'E E'
      'F G';
  }
`;

const entryStyles = css`
  padding: 12rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    padding: clamp(8rem, 4vw - 10rem, 12rem);
    font-size: clamp(14rem, 7vw - 10rem, 16rem);
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.BASE_800};
  flex-grow: 1;
  appearance: none;
  width: 100%;
  ${entryStyles}

  &::placeholder {
    color: ${({ theme }) => theme.BASE_700};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const inputContainerAreasStyles = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  .map(
    (area, index) => /* css */ `
      &:nth-child(${index + 1}) {
        grid-area: ${area};
      }
    `,
  )
  .join('');

const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.BASE_400};
  border-radius: 4rem;
  border: 1rem solid ${({ theme }) => theme.BASE_500};
  display: flex;
  justify-content: stretch;
  align-items: center;
  ${inputContainerAreasStyles};

  /* stylelint-disable-next-line */
  &:has(${Input}[placeholder='CEP']) {
    max-width: 200rem;
  }
`;

const Select = styled.select`
  border: none;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  flex-grow: 1;
  color: ${({ theme }) => theme.BASE_700};
  ${entryStyles}

  &:valid {
    color: ${({ theme }) => theme.BASE_800};
  }
`;

const Optional = styled.span`
  ${entryStyles}
  font-size: 12rem;
  font-style: italic;
  color: ${({ theme }) => theme.BASE_700};

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 12rem;
  }
`;

export {
  AddressContainer,
  MapPinLineCustom,
  AddressInputs,
  InputContainer,
  Input,
  Select,
  Optional,
};
