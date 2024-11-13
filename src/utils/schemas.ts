import { z } from 'zod';

import { UTIL_INFOS } from './infos';
import { brazilianPostalCode } from './regex';

const { POSTAL_CODE, STREET, NUMBER, NEIGHBORHOOD, CITY } = UTIL_INFOS;

const PaymentMethods = z.enum(['creditCard', 'debitCard', 'cash']);

const FormSchema = z.object({
  postalCode: z.string().regex(brazilianPostalCode, { message: POSTAL_CODE }),
  street: z
    .string()
    .min(3, { message: STREET.MIN })
    .max(255, { message: STREET.MAX }),
  number: z
    .number()
    .int()
    .min(0, { message: NUMBER })
    .max(99999, { message: NUMBER }),
  complement: z.string().max(255).optional(),
  neighborhood: z
    .string()
    .min(2, { message: NEIGHBORHOOD.MIN })
    .max(255, { message: NEIGHBORHOOD.MAX }),
  city: z
    .string()
    .min(2, { message: CITY.MIN })
    .max(255, { message: CITY.MAX }),
  state: z.string().length(2),
  paymentMethod: PaymentMethods,
});

export { FormSchema };
