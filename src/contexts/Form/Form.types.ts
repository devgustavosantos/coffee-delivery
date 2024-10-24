import { ReactNode } from 'react';
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { FormType } from '@/types/address';

interface FormProviderProps {
  children: ReactNode;
}

interface FormContextType {
  register: UseFormRegister<FormType>;
  control: Control<FormType>;
  handleSubmit: UseFormHandleSubmit<FormType, undefined>;
  onSubmit: (data: FormType) => void;
  errors: FieldErrors<FormType>;
}

export type { FormProviderProps, FormContextType };
