import { z } from 'zod';

import { AddressSchema } from './Address.data';

type AddressType = z.infer<typeof AddressSchema>;

interface AddressInfo {
  name: keyof AddressType;
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

export type { AddressInfo, AddressType, State };
