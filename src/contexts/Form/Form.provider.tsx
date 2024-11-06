import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';

import { FormType } from '@/types/form';
import { FormSchema } from '@/utils/schemas';
import { updateAction } from '@/utils/updateAction';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContext } from '.';
import { FormProviderProps } from './Form.types';

export function FormProvider({ children }: FormProviderProps) {
  const { actions, state } = useStateMachine({ updateAction });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: state.data,
  });

  async function onSubmit(data: FormType) {
    console.log('>>> data', data);

    actions.updateAction(data);
  }

  const paymentMethodWatch = watch('paymentMethod');

  return (
    <FormContext.Provider
      value={{
        register,
        control,
        handleSubmit,
        onSubmit,
        errors,
        paymentMethodWatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
