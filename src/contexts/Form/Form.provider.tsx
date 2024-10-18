import { useForm } from 'react-hook-form';

import { AddressType } from '@/types/address';
import { AddressSchema } from '@/utils/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContext } from '.';
import { FormProviderProps } from './Form.types';

export function FormProvider({ children }: FormProviderProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressType>({
    resolver: zodResolver(AddressSchema),
  });

  async function onSubmit(data: AddressType) {
    console.log('>>> data', data);
  }

  console.log('>>> errors', errors);

  return (
    <FormContext.Provider value={{ register, handleSubmit, onSubmit }}>
      {children}
    </FormContext.Provider>
  );
}
