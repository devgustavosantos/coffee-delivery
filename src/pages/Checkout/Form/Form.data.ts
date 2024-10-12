const postalCode = {
  type: 'text',
  required: true,
  placeholder: 'CEP',
  mask: '00000-000',
};

const addressInfos = [
  { name: 'Rua' },
  { name: 'Número' },
  { name: 'Complemento', isOptional: true },
  { name: 'Bairro' },
  { name: 'Cidade' },
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

export { postalCode, addressInfos, states };
