import { z } from 'zod';

import { AddressSchema } from '@/utils/schemas';

type AddressType = z.infer<typeof AddressSchema>;

export type { AddressType };
