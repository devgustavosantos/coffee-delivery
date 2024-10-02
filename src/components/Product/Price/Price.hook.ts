import { useProductContext } from '@/contexts';

export function usePrice() {
  const { infos } = useProductContext();

  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(infos.price);

  return { valueFormatted };
}
