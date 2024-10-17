import { z } from 'zod';

import { AddressSchema } from './Form.data';

type AddressType = z.infer<typeof AddressSchema>;

export type { AddressType };
