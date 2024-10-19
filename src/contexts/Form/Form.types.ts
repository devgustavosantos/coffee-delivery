import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { FormType } from '@/types/address';

interface FormProviderProps {
  children: ReactNode;
}

interface FormContextType {
  register: UseFormRegister<FormType>;
  handleSubmit: UseFormHandleSubmit<FormType, undefined>;
  onSubmit: (data: FormType) => void;
}

export type { FormProviderProps, FormContextType };
