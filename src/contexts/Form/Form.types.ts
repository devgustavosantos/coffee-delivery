import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { AddressType } from '@/types/address';

interface FormProviderProps {
  children: ReactNode;
}

interface FormContextType {
  register: UseFormRegister<AddressType>;
  handleSubmit: UseFormHandleSubmit<AddressType, undefined>;
  onSubmit: (data: AddressType) => void;
}

export type { FormProviderProps, FormContextType };
