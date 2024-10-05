import { useCartContext } from '@/contexts';

export function useSummary() {
  const { dispatch } = useCartContext();

  function handleProductRemove(id: number) {
    dispatch({ type: 'remove_from_cart', payload: { id } });
  }

  return { handleProductRemove };
}
