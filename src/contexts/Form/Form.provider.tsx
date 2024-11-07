import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useCartContext } from '@/contexts';
import { COLORS } from '@/styles';
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

  const navigate = useNavigate();

  const { dispatch } = useCartContext();

  async function onSubmit(data: FormType) {
    actions.updateAction(data);

    Swal.fire({
      title: 'Tem certeza?',
      text: 'O pedido será finalizado.',
      icon: 'question',
      confirmButtonColor: COLORS.SECONDARY_800,
      confirmButtonText: 'Sim, confirmar!',
      showCancelButton: true,
      cancelButtonColor: COLORS.BASE_700,
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (!result.isConfirmed) return;

      dispatch({ type: 'clean_cart' });

      navigate('/success');
    });
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
