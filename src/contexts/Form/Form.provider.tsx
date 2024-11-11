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
import { FORM_INFOS } from './Form.infos';
import { FormProviderProps } from './Form.types';

const { TITLE, DESCRIPTION, CONFIRM, CANCEL } = FORM_INFOS;

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
      title: TITLE,
      text: DESCRIPTION,
      icon: 'question',
      confirmButtonColor: COLORS.SECONDARY_800,
      confirmButtonText: CONFIRM,
      showCancelButton: true,
      cancelButtonColor: COLORS.BASE_700,
      cancelButtonText: CANCEL,
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
