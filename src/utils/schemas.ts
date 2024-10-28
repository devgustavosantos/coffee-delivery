import { z } from 'zod';

import { brazilianPostalCode } from './regex';

const PaymentMethods = z.enum(['creditCard', 'debitCard', 'cash']);

const MESSAGES = {
  postalCode: 'Digite um CEP válido!',
  street: {
    min: 'O nome da Rua deve conter ao menos 2 caracteres!',
    max: 'O nome da Rua deve conter no máximo 255 caracteres!',
  },
  number: 'O número deve estar entre 0 e 99999!',
  neighborhood: {
    min: 'O nome do Bairro deve conter ao menos 2 caracteres!',
    max: 'O nome do Bairro deve conter no máximo 255 caracteres!',
  },
  city: {
    min: 'O nome da Cidade deve conter ao menos 2 caracteres!',
    max: 'O nome da Cidade deve conter no máximo 255 caracteres!',
  },
};

const FormSchema = z.object({
  postalCode: z
    .string()
    .regex(brazilianPostalCode, { message: MESSAGES.postalCode }),
  street: z
    .string()
    .min(3, { message: MESSAGES.street.min })
    .max(255, { message: MESSAGES.street.max }),
  number: z
    .number()
    .int()
    .min(0, { message: MESSAGES.number })
    .max(99999, { message: MESSAGES.number }),
  complement: z.string().max(255).optional(),
  neighborhood: z
    .string()
    .min(2, { message: MESSAGES.neighborhood.min })
    .max(255, { message: MESSAGES.neighborhood.max }),
  city: z
    .string()
    .min(2, { message: MESSAGES.city.min })
    .max(255, { message: MESSAGES.city.max }),
  state: z.string().length(2),
  paymentMethod: PaymentMethods,
});

export { FormSchema };
