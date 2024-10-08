type UsePriceType = {
  value: number;
};

type PriceContainerProps = {
  emphasized?: boolean;
};

type PriceProps = UsePriceType & PriceContainerProps;

export type { UsePriceType, PriceContainerProps, PriceProps };
