import { useForm } from 'react-hook-form';

import { FormType } from '@/types/address';
import { FormSchema } from '@/utils/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContext } from '.';
import { FormProviderProps } from './Form.types';

export function FormProvider({ children }: FormProviderProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: FormType) {
    console.log('>>> data', data);
  }

  console.log('>>> errors', errors);

  return (
    <FormContext.Provider value={{ register, handleSubmit, onSubmit, errors }}>
      {children}
    </FormContext.Provider>
  );
}
