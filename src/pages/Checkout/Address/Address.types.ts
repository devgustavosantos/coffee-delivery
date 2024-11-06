import { FormType } from '@/types/form';

interface AddressInfo {
  name: keyof FormType;
  placeholder: string;
  type?: 'number';
  isOptional?: true;
}

interface State {
  value:
    | 'UF'
    | 'AC'
    | 'AL'
    | 'AM'
    | 'AP'
    | 'BA'
    | 'CE'
    | 'DF'
    | 'ES'
    | 'GO'
    | 'MA'
    | 'MG'
    | 'MS'
    | 'MT'
    | 'PA'
    | 'PB'
    | 'PE'
    | 'PI'
    | 'PR'
    | 'RJ'
    | 'RN'
    | 'RO'
    | 'RR'
    | 'RS'
    | 'SC'
    | 'SE'
    | 'SP'
    | 'TO';
  disabled?: true;
  selected?: true;
}

export type { AddressInfo, FormType, State };
