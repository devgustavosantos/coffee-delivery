import { z } from 'zod';

import { FormSchema } from '@/utils/schemas';

type FormType = z.infer<typeof FormSchema>;

export type { FormType };
