import { AddressInfo, State } from './Address.types';

const addressInfos: AddressInfo[] = [
  { name: 'postalCode', placeholder: 'CEP' },
  { name: 'street', placeholder: 'Rua' },
  { name: 'number', placeholder: 'Número', type: 'number' },
  { name: 'complement', placeholder: 'Complemento', isOptional: true },
  { name: 'neighborhood', placeholder: 'Bairro' },
  { name: 'city', placeholder: 'Cidade' },
];

const states: State[] = [
  { value: 'UF', disabled: true, selected: true },
  { value: 'AC' },
  { value: 'AL' },
  { value: 'AM' },
  { value: 'AP' },
  { value: 'BA' },
  { value: 'CE' },
  { value: 'DF' },
  { value: 'ES' },
  { value: 'GO' },
  { value: 'MA' },
  { value: 'MG' },
  { value: 'MS' },
  { value: 'MT' },
  { value: 'PA' },
  { value: 'PB' },
  { value: 'PE' },
  { value: 'PI' },
  { value: 'PR' },
  { value: 'RJ' },
  { value: 'RN' },
  { value: 'RO' },
  { value: 'RR' },
  { value: 'RS' },
  { value: 'SC' },
  { value: 'SE' },
  { value: 'SP' },
  { value: 'TO' },
];

export { addressInfos, states };
