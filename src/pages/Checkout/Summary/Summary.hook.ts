import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import { useCartContext } from '@/contexts';
import { COLORS } from '@/styles';

export function useSummary() {
  const { dispatch } = useCartContext();

  function handleProductRemove(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'O produto será removido do carrinho.',
      icon: 'warning',
      confirmButtonColor: COLORS.SECONDARY_800,
      confirmButtonText: 'Sim, remover!',
      showCancelButton: true,
      cancelButtonColor: COLORS.BASE_700,
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (!result.isConfirmed) return;

      dispatch({ type: 'remove_from_cart', payload: { id } });

      toast.warning('O produto foi removido!');
    });
  }

  return { handleProductRemove };
}
