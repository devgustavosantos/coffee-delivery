import { ErrorContainer } from './Error.styles';
import { ErrorProps } from './Error.types';

export function Error({ children, className }: ErrorProps) {
  return <ErrorContainer className={className}>{children}</ErrorContainer>;
}
