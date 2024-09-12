interface NameContainerProps {
  emphasized?: boolean;
}

interface NameProps extends NameContainerProps {
  content: string;
}

export type { NameContainerProps, NameProps };
