import { z } from 'zod';

import { brazilianPostalCode } from './regex';

const PaymentMethods = z.enum(['creditCard', 'debitCard', 'cash']);

const FormSchema = z.object({
  postalCode: z.string().regex(brazilianPostalCode),
  street: z.string().min(3).max(255),
  number: z.number().int().min(0).max(99999),
  complement: z.string().min(1).max(255).optional(),
  neighborhood: z.string().min(2).max(255),
  city: z.string().min(2).max(255),
  state: z.string().length(2),
  paymentMethod: PaymentMethods,
});

export { FormSchema };
