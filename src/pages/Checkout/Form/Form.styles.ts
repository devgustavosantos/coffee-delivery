import { styled } from 'styled-components';

import { MapPinLine } from '@phosphor-icons/react';

import { iconSectionStyles } from '../Checkout.styles';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 32rem;
`;

const MapPinLineCustom = styled(MapPinLine)`
  ${iconSectionStyles}
  color: ${({ theme }) => theme.PRIMARY_900};
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 200rem 1fr 60rem;
  grid-template-areas:
    'A empty empty'
    'B B B'
    'C D D'
    'E F G';
  gap: 12rem;
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
  ${inputContainerAreasStyles};
`;

const Input = styled.input`
  padding: 12rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.BASE_800};
  flex-grow: 1;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.BASE_700};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const Select = styled.select`
  border: none;
  background-color: transparent;
  appearance: none;
  padding: 12rem;
  cursor: pointer;
  flex-grow: 1;
  color: ${({ theme }) => theme.BASE_700};

  &:valid {
    color: ${({ theme }) => theme.BASE_800};
  }
`;

export { FormContainer, MapPinLineCustom, Form, InputContainer, Input, Select };
