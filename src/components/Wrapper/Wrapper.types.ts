import { ReactNode } from 'react';
import { RuleSet } from 'styled-components';

interface WrapperProps {
  children: ReactNode;
  stylization?: RuleSet<object>;
}

type WrapperContainerProps = Pick<WrapperProps, 'stylization'>;

export type { WrapperProps, WrapperContainerProps };
