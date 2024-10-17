import { z } from 'zod';

import { AddressInfo, State } from './Form.types';

const AddressSchema = z.object({
  postalCode: z.string().length(9),
  street: z.string().min(3).max(255),
  number: z.number().int().min(0).max(99999),
  complement: z.string().min(1).max(255).optional(),
  neighborhood: z.string().min(2).max(255),
  city: z.string().min(2).max(255),
  state: z.string().length(2),
});

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

export { addressInfos, states, AddressSchema };
