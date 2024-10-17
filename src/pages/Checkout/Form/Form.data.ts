import { z } from 'zod';

const addressInfos = [
  { name: 'postalCode' as const, placeholder: 'CEP' },
  { name: 'street' as const, placeholder: 'Rua' },
  { name: 'number' as const, placeholder: 'Número', type: 'number' },
  { name: 'complement' as const, placeholder: 'Complemento', isOptional: true },
  { name: 'neighborhood' as const, placeholder: 'Bairro' },
  { name: 'city' as const, placeholder: 'Cidade' },
];

const states = [
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

const AddressSchema = z.object({
  postalCode: z.string().length(9),
  street: z.string().min(3).max(255),
  number: z.number().int().min(0).max(99999),
  complement: z.string().min(1).max(255).optional(),
  neighborhood: z.string().min(2).max(255),
  city: z.string().min(2).max(255),
  state: z.string().length(2),
});

export { addressInfos, states, AddressSchema };
