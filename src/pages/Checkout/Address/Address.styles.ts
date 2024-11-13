import { IMaskInput } from 'react-imask';
import { css, styled } from 'styled-components';

import { Error } from '@/components';
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

const inputStyles = css`
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

const Input = styled.input`
  ${inputStyles}
`;

const CustomIMaskInput = styled(IMaskInput)`
  ${inputStyles}
`;

const InputStyles = css`
  background-color: ${({ theme }) => theme.BASE_400};
  border-radius: 4rem;
  border: 1rem solid ${({ theme }) => theme.BASE_500};
`;

const InputContainer = styled.div`
  ${InputStyles}
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const Select = styled.select`
  ${InputStyles}
  ${entryStyles}
  grid-area: G;
  appearance: none;
  cursor: pointer;
  flex-grow: 1;
  color: ${({ theme }) => theme.BASE_700};
  max-height: 44rem;

  &:valid {
    color: ${({ theme }) => theme.BASE_800};
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    max-height: 38rem;
  }
`;

const Option = styled.option`
  &:disabled {
    display: none;
  }
`;

const CustomError = styled(Error)`
  font-size: 12rem;
`;

const inputWrapperAreasStyles = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  .map(
    (area, index) => /* css */ `
      &:nth-child(${index + 1}) {
        grid-area: ${area};
      }
    `,
  )
  .join('');

const InputWrapper = styled.div`
  ${inputWrapperAreasStyles};
  display: flex;
  flex-direction: column;
  gap: 16rem;

  /* stylelint-disable-next-line */
  &:has(${Input}[placeholder='CEP']) {
    max-width: 200rem;
  }

  /* stylelint-disable-next-line */
  &:has(${CustomError}) ${InputContainer} {
    border-color: ${({ theme }) => theme.ERROR_900};
    background-color: ${({ theme }) => theme.ERROR_700};
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
  InputWrapper,
  InputContainer,
  Input,
  CustomIMaskInput,
  Select,
  Option,
  CustomError,
  Optional,
};
