import { z } from 'zod';

const AddressSchema = z.object({
  postalCode: z.string().length(9),
  street: z.string().min(3).max(255),
  number: z.number().int().min(0).max(99999),
  complement: z.string().min(1).max(255).optional(),
  neighborhood: z.string().min(2).max(255),
  city: z.string().min(2).max(255),
  state: z.string().length(2),
});

export { AddressSchema };
