export function usePrice(value: number) {
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(value);

  return { valueFormatted };
}
