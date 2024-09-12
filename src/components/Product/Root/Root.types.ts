import { ReactNode } from 'react';

interface RootContainerProps {
  inCardFormat: boolean;
}

interface RootProps extends RootContainerProps {
  children: ReactNode;
}

export type { RootContainerProps, RootProps };
