interface PriceContainerProps {
  emphasized?: boolean;
}

interface PriceProps extends PriceContainerProps {
  value: number;
}

export type { PriceContainerProps, PriceProps };
