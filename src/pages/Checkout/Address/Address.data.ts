import { ADDRESS_INFOS } from './Address.infos';
import { AddressInfo, State } from './Address.types';

const { STREET, NUMBER, COMPLEMENT, NEIGHBORHOOD, CITY } = ADDRESS_INFOS;

const postalCode = { placeholder: 'CEP', mask: '00000-000' };

const addressInfos: AddressInfo[] = [
  { name: 'street', placeholder: STREET },
  {
    name: 'number',
    placeholder: NUMBER,
    type: 'number',
  },
  {
    name: 'complement',
    placeholder: COMPLEMENT,
    isOptional: true,
  },
  { name: 'neighborhood', placeholder: NEIGHBORHOOD },
  { name: 'city', placeholder: CITY },
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

export { postalCode, addressInfos, states };
